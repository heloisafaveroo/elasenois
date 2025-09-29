const express = require('express');
const router = express.Router();
const SobreTopico = require('../models/SobreTopico');

// GET - Retorna todos os "sobre tópicos"
router.get('/', async (req, res) => {
  try {
    const topicos = await SobreTopico.find();
    res.json(topicos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Cria um novo "sobre tópico"
router.post('/', async (req, res) => {
  const topico = new SobreTopico({
    titulo: req.body.titulo,
    texto: req.body.texto,
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