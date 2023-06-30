import { Router } from "express";
import { postArchivo, getClientes, getClienteNombre, getClienteFecha } from "../controllers/cliente.controller.js";


const router = Router()

router.post("/subirdatos", postArchivo)

router.get("/listaclientes", getClientes)

router.get("/datosnombre/:Nombre_Cliente", getClienteNombre)

router.get("/datosfecha", getClienteFecha)


export default router