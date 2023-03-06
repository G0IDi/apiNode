import { pool } from "../config/database/db";
import message from "../config/message";

export const createUser = async (req, res) => {
    try{
        const nombre = req.body.nombre;
        const result = await pool.query(`INSERT INTO users (nombre) VALUES ('${nombre}')`)
        res.json(result);
    }catch (error){
        message(error.message,"danger");
        res.status(500);
    }
}