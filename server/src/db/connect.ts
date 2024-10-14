import { Pool } from "pg"

export const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'user123',
    password: 'password123',
    database: 'db123'
});

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
