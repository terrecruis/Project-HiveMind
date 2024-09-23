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
      set(value) { //custom setter method
        // Saving passwords in plaintext in a database is a no-no!
        // You should at least store a secure hash of the password (as done here).
        // Even better, you should use a random salt to protect against rainbow tables.
        let hash = createHash("sha256");    
        this.setDataValue('password', hash.update(value).digest("hex"));
      }
    }
  }, { // Other model options go here
    //the actual table name is inferred from the model name (pluralized) by default
  });
}

