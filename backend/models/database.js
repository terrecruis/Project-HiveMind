import { Sequelize } from 'sequelize'; // Corretto import
import { createModel as createVoteModel } from './vote.js';
import { createModel as createCommentsModel } from './comment.js';
import { createModel as createUsersModel } from './user.js';
import { createModel as createIdeasModel } from './idea.js';

import 'dotenv/config'; //load environment variables

// Initialize Sequelize with environment variables
export const db = new Sequelize(process.env.DB_CONNECTION_URI, {
    dialect: process.env.DIALECT 
});

// Create tables
createUsersModel(db);
createIdeasModel(db);
createCommentsModel(db);
createVoteModel(db);

// Export models
export const { idea, user, vote, comment } = db.models; 

// Configure relationships
user.hasMany(idea);
idea.belongsTo(user);

idea.hasMany(comment);
idea.hasMany(vote);

vote.belongsTo(idea);
vote.belongsTo(user);

comment.belongsTo(idea);
comment.belongsTo(user);

// Loading with votes
idea.addScope('withVotes', {
    include: [vote]
});

// Loading with numbers of votes
idea.addScope('withVotesCount', {
    attributes: {
        include: [
            [Sequelize.fn('COUNT', Sequelize.col('Votes.IdeaId')), 'TotalVotes'],
            [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN Votes.value = 1 THEN 1 ELSE 0 END')), 'PositiveVotes'],
            [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN Votes.value = 0 THEN 1 ELSE 0 END')), 'NegativeVotes'],
            [Sequelize.literal('SUM(CASE WHEN Votes.value = 1 THEN 1 ELSE 0 END) - SUM(CASE WHEN Votes.value = 0 THEN 1 ELSE 0 END)'), 'score']
        ]
    },
    include: [
        {
            model: vote,
            attributes: [],
            duplicating: false
        }
    ],
    group: ['idea.id']
});

// Loading with comments
idea.addScope('full', {  
    attributes: {
        include: [
            [Sequelize.fn('COUNT', Sequelize.col('Votes.IdeaId')), 'TotalVotes'],
            [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN Votes.value = 1 THEN 1 ELSE 0 END')), 'PositiveVotes'],
            [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN Votes.value = 0 THEN 1 ELSE 0 END')), 'NegativeVotes'],
            [Sequelize.literal('SUM(CASE WHEN Votes.value = 1 THEN 1 ELSE 0 END) - SUM(CASE WHEN Votes.value = 0 THEN 1 ELSE 0 END)'), 'score']
        ]
    },
    include: [
        {
            model: vote,
            attributes: [],
            duplicating: false
        },
        {
            model: comment, // Include comments
            duplicating: true
        }
    ],
    group: ['idea.id', 'comments.id']
});

// Sync database with models and create schema and tables
db.sync().then(() => {
    console.log("Database synced correctly");
}).catch(err => {
    console.error("Error with database synchronization: " + err.message);
});
