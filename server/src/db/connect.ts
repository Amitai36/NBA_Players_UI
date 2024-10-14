import { Pool } from "pg"
import { database, dbport, host, password, user } from "../config";

export const pool = new Pool({
    host: host,
    port: dbport,
    user: user,
    password: password,
    database: database
});

// Connecting to the database and handling the connection process
export default pool.connect()
    .then(() => {
        console.log('Connected to the database successfully!');
    })
    .catch(err => {
        console.error('Connection error', err.stack);
    })
    .finally(() => {
        pool.end();
    });
