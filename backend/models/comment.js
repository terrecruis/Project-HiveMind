import { DataTypes } from "sequelize";

export function createModel(database){
  database.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.TEXT
    }
  });
}

