import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Role = db.define("roles", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
});

export default Role;
