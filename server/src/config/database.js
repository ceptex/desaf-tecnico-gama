// Script responsável pela conexão entre esta API e o banco de dados.

const { Pool } = require('pg');

const pool = new Pool({
    user: 'caioteixeira',
    password: 'poeallan003',
    host: 'localhost',
    port: 5432,
    database: 'virtual-library'
});

pool.on('error', (error, client) => {
    console.log('Erro inesperado', error)
    process.exit(-1)
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!')
});

module.exports = {
    pool,
    query: (text, params) => pool.query(text, params)
}