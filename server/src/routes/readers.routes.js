// Script responsável pelas rotas de Readers

const router = require('express-promise-router')();
const readerController = require('../controllers/readers.controller');

// Definindo as rotas do Server

// Rota responsável por listar todos os leitores: (GET): localhost:3000/api/readers
router.get('/readers', readerController.listAllReaders);

// Rota responsável por criar novos leitores: (POST): localhost:3000/api/readers
router.post('/readers', readerController.createReader);

// Rota responsável por listar um leitor por ID: (GET): localhost:30npm00/api/readers/:id
router.get('/readers/:id', readerController.findReaderByID);

// Rota responsável por atualizar um leitor por ID: (PUT): localhost:3000/api/readers/:id
router.put('/readers/:id', readerController.updateReaderByID);

// Rota responsável por deletar um leitor por ID: (DELETE): localhost:3000/api/readers/:id
router.delete('/readers/:id', readerController.deleteReaderByID);

module.exports = router