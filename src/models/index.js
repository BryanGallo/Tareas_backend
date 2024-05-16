import User from "./User.js";
import Role from "./Rol.js";

//Relacion usuario y rol
Role.hasMany(User, {
    foreignKey: { name: "id_Rol" },
    as: "roles",
    onDelete: "SET NULL",
    onUpdate: "SET NULL ",
});
Usuario.belongsTo(Role, {
    foreignKey: { name: "id_Rol" },
    as: "roles",
    onDelete: "SET NULL",
    onUpdate: "SET NULL ",
});

export { User, Role };
