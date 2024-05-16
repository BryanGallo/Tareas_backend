import { DataTypes } from "sequelize";
import db from "../config/db.js";

const User = db.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    ci: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        trim: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        trim: true,
    },
    token: DataTypes.STRING,
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

export default User
