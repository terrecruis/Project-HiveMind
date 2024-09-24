import { DataTypes } from "sequelize";
import { createHash } from "crypto";


export function createModel(database) {
  database.define('User', {
    // Model attributes are defined here
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) { //hash the password before saving it
        let hash = createHash("sha256");    
        this.setDataValue('password', hash.update(value).digest("hex"));
      }
    }
  }, { // Other model options go here
  });
}

