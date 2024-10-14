import { Pool } from "pg"

export const client = new Pool({
    host: 'db',
    port: 5432,
    user: 'user123',
    password: 'password123',
    database: 'db123'
});

export default client.connect()
    .then(() => {
        console.log('Connected to the database successfully!');
    })
    .catch(err => {
        console.error('Connection error', err.stack);
    })
    .finally(() => {
        client.end();
    });
