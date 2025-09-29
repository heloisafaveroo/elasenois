const express = require('express');
const router = express.Router();
const Topico = require('../models/Topico');

// GET - Retorna todos os tópicos
router.get('/', async (req, res) => {
  try {
    const topicos = await Topico.find();
    res.json(topicos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Cria um novo tópico
router.post('/', async (req, res) => {
  const topico = new Topico({
    titulo: req.body.titulo,
    subtopicos: req.body.subtopicos,
  });
  try {
    const newTopico = await topico.save();
    res.status(201).json(newTopico);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Outras rotas (GET por ID, PUT, DELETE) podem ser adicionadas aqui.

module.exports = router;