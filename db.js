const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'myfirstdb',
    password: '8085',
    port: 5432,
});

client.connect();

console.log("db connected")