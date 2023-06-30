import { pool } from '../db.js'

export const postArchivo = async (req, res) => {
    const {
        idCliente,
        Nombre_Cliente,
        Apellido_Cliente,
        Telefono_Cliente,
        Direccion_Cliente,
        Fecha_Insc_Cliente
    } = req.body
    const [rows] = await pool.query('INSERT INTO cliente (idCliente, Nombre_Cliente, Apellido_Cliente, Telefono_Cliente, Direccion_Cliente, Fecha_Insc_Cliente) VALUES (?, ?, ?, ?, ?, ?)', [idCliente, Nombre_Cliente, Apellido_Cliente, Telefono_Cliente, Direccion_Cliente, Fecha_Insc_Cliente])
    //console.log(req.body)
    res.send({ rows })
}


export const getClientes = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM cliente')
    res.json(rows)
}

export const getClienteNombre = async (req, res) => {
    const Nombre_Cliente = (req.params.Nombre_Cliente)
    const [rows] = await pool.query('SELECT * FROM cliente WHERE Nombre_Cliente = ?', [Nombre_Cliente])

    if (rows.length <= 0) {
        return res.status(404).json({ message: "Cliente no encontrado" })
    }
    // console.log(rows)
    res.json(rows)
}

export const getClienteFecha = async (req, res) => {
    const {
        FechaInicio,
        FechaFin
    } = req.body
    const [rows] = await pool.query('SELECT * FROM cliente WHERE Fecha_Insc_Cliente BETWEEN ? AND ?', [FechaInicio, FechaFin])
    res.send(rows)
}