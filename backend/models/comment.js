import { DataTypes } from "sequelize";

export function createModel(db) {
    db.define('comment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        text: {
            type: DataTypes.TEXT,
            validate: {
                len: [0, 255] //max 255 characters
            }
        }
    });
}
