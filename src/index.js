import express from "express";
import indexRutas from "./routes/index.routes.js"
import clienteRutas from "./routes/cliente.routes.js";


const app = express()

app.use(express.json())


app.use('/api/', indexRutas)
app.use('/api/', clienteRutas)

app.listen(3000)
console.log("Servidor corriendo en el puerto 3000")

