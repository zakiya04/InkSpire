import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();


const pool = new Pool({
   user: process.env.user ,
   host: process.env.host ,
   database: process.env.databse ,
   password: process.env.password,
   port: Number(process.env.port),
   max: 10,
   idleTimeoutMillis: 3000,
   connectionTimeoutMillis: 2000,
});

pool.connect()
.then(client => {console.log("Got connected to Postgres Table"); client.release()})
.catch(err => console.log("Something went wrong while connecting to the Database", err))


export default pool;