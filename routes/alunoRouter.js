const express = require('express');

const router = express.Router();

const alunoController = require('../controller/alunoController');


// listar todos
router.get(
    '/alunos',
    alunoController.listarAlunos
);


// buscar por RA
router.get(
    '/alunos/:ra',
    alunoController.buscarPorRA
);


// listar disciplinas
router.get(
    '/alunos/:ra/disciplinas',
    alunoController.listarDisciplinas
);


// atualizar
router.put(
    '/alunos/:ra',
    alunoController.atualizarAluno
);

module.exports = router;