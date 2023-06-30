import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Admin123',
    port: '3306',
    database: 'crmprueba'
})

// pool.query()