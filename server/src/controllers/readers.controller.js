// Script responsável pelos métodos do CRUD

const db = require('../config/database');

// Método responsável por criar um novo leitor

exports.createReader = async (req, res) => {
    const { name_reader, email_reader } = req.body
}