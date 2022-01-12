// Script responsável por fazer conexão com o servidor (server).

const express = require('express');
const app = express();
const cors = require('cors');

// Rotas da API (Usuários)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

module.exports = app