const express = require('express');
const router = express.Router();
const ProjetoApoio = require('../models/ProjetoApoio');

// GET - Retorna todos os projetos de apoio
router.get('/', async (req, res) => {
  try {
    const projetos = await ProjetoApoio.find();
    res.json(projetos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Cria um novo projeto de apoio
router.post('/', async (req, res) => {
  const projeto = new ProjetoApoio({
    nome: req.body.nome,
    descricao: req.body.descricao,
    contato: req.body.contato,
    link: req.body.link,
  });
  try {
    const newProjeto = await projeto.save();
    res.status(201).json(newProjeto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Outras rotas (GET por ID, PUT, DELETE) podem ser adicionadas aqui.

module.exports = router;
