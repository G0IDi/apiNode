import { pool } from "../config/database/db";
import message from "../config/message";


//insertar datos 
export const createUser = async (req, res) => {
    try{
        const nombre = req.body.nombre;
        // const result = await pool.query(`INSERT INTO users (nombre) VALUES ('${nombre}')`)
        const result = await pool.query(`CALL spInsertarUser('${nombre}')`);
        res.json(result);
    }catch (error){
        message(error.message,"danger");
        res.status(500);
    }
}


// llamar lista de users
export const listUser = async (req, res) => {
    try{
        const result = await pool.query(`CALL spListaUser()`);
        res.json(result)
    }catch (error){
        message(error.message,"danger");
        res.status(500);
    }
}

//llamar uno o varios users 
export const findUser = async (req, res) => {
   try{
        const id = req.params.id;
        const result = await pool.query(`call spEncontrarUser(${id})`);
        res.json(result);
   }catch (error){
        message(error.message,"danger");
        res.status(500);
   }
}

//ping
export const pingUser = async (req, res) => {
    try{
        const result = await pool.query(`SELECT "HELLO WORLD" as result`);
        res.send(result[0]);
    }catch (error){
        message(error.message,"danger");
        res.status(500);
    }
 }

// modificar usuario 
 export const updateUser = async (req, res) => {
    try{
         const id = req.params.id;
         const nombre = req.body.nombre;

         const result = await pool.query(`call spModificarUser(${id},'${nombre}')`);
         res.json(result);
    }catch (error){
         message(error.message,"danger");
         res.status(500);
    }
 }

//borra los datos del usuario segun la id 
 export const deleteUser = async (req, res) => {
    try{
         const id = req.params.id;
         const result = await pool.query(`call spEliminarUser(${id})`);
         res.json(result);
    }catch (error){
         message(error.message,"danger");
         res.status(500);
    }
 }
