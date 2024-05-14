import Sequelize from "sequelize";

const db = new Sequelize("tareas", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    timezone: "America/Bogota",
    define: {
        timestamps: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000,
    },
    // operatorsAliases:false,
});

export default db;
