import { DataTypes } from "sequelize";
import {createHash } from 'crypto';

export function createModel(db) {
    db.define('user', {
        userName: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,

            set(value) {
                //hash the password before saving it
                let hash = createHash('sha256');
                this.setDataValue('password', hash.update(value).digest('hex'));
            }
        }
    });
}

