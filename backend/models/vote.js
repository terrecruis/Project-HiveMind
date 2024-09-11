import { DataTypes } from "sequelize";

export function createModel(db) {
    db.define('vote', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        value: {
            type: DataTypes.BOOLEAN //true for upvote, false for downvote
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['userId', 'ideaId'] //an user can vote only once for an idea
            }
        ]
    });
}