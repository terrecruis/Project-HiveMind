import { DataTypes } from "sequelize";

export function createModel(database) {
  database.define('Idea', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: [0, 400] // maximum 400 characters
      }
    }
  });
}

