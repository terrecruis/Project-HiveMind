import { Sequelize } from "sequelize";
import { createModel as createUserModel } from "./User.js";
import { createModel as createIdeaModel } from "./Idea.js";
import { createModel as createVoteModel } from "./Vote.js";
import { createModel as createCommentModel } from "./Comment.js";

import 'dotenv/config.js'; //read .env file and make it available in process.env

export const database = new Sequelize(process.env.DB_CONNECTION_URI, {
  dialect: process.env.DIALECT
});

createUserModel(database);
createIdeaModel(database);
createVoteModel(database);
createCommentModel(database);

export const {User, Idea, Vote, Comment} = database.models;


//associations configuration
// User can have many Ideas
User.hasMany(Idea);
Idea.belongsTo(User);

// Idea can have many Votes
Idea.hasMany(Vote);
Vote.belongsTo(Idea);

// Vote belongs to User
Vote.belongsTo(User);

// Comment belongs to Idea and User
Comment.belongsTo(Idea);
Comment.belongsTo(User);
Idea.hasMany(Comment);


// Add eager loading to include votes when fetching ideas
Idea.addScope('withVotes', {
  include: [Vote]
});

// Add eager loading to include number of votes when fetching ideas
Idea.addScope('withVotesCount', {
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
      model: Vote,
      attributes: [],
      duplicating: false
    }
  ],
  group: ['Idea.id']
});

// Include comments
Idea.addScope('full', {  
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
      model: Vote,
      attributes: [],
      duplicating: false
    },
    {
      model: Comment, // Include comments
      duplicating: true
    }
  ],
  group: ['Idea.id', 'Comments.id']
});


//synchronize schema (creates missing tables)
database.sync().then( () => {
  console.log("Database synced correctly");
}).catch( err => {
  console.err("Error with database synchronization: " + err.message);
});