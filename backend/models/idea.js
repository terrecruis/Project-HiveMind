import { DataTypes } from "sequelize";

export function createModel(db) {
    db.define('idea', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title : {
            type: DataTypes.TEXT,
        },
        description: {
            type: DataTypes.TEXT,
            //max 400 characters
            validate: {
                len: [0, 400]
            }
        }
    });
}