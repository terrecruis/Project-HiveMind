import { DataTypes } from "sequelize";

/*
export function createModel(database){
  database.define('Vote', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    value: {
      type: DataTypes.BOOLEAN
    }
  });
}
*/

export function createModel(database){
  database.define('Vote', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    value: {
      type: DataTypes.BOOLEAN
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['UserUserName', 'IdeaId']
      }
    ]
  });
}


