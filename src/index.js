import express from "express";
import cors from "cors";
import db from "./config/db.js";
import authRouter from "./routes/authRoutes.js";

const app = express();

//para poder enviar respuestas tipo json
app.use(express.json());
//configura in middleware que sirve archivos estaticos de la ruta indicada
app.use(express.static("./src/public"));

//Conexion BDD
try {
    db.authenticate();
    db.sync();
    console.log("Conexion correcta a la BDD");
} catch (error) {
    console.log("error en la base");
}

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

//Routing
app.use("/auth", authRouter);

const port = 4000;
//Servidor
app.listen(port, () => {
    console.log(`Servidor operativo en el puerto ${port}`);
});
