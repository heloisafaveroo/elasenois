const express = require('express');
const router = express.Router();
const Evento = require('../models/Evento');

// GET - Retorna todos os eventos
router.get('/', async (req, res) => {
  try {
    const eventos = await Evento.find();
    res.json(eventos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Cria um novo evento
router.post('/', async (req, res) => {
  const evento = new Evento({
    nome_do_evento: req.body.nome_do_evento,
    data: req.body.data,
    local: req.body.local,
    descricao: req.body.descricao,
    fotos: req.body.fotos,
  });
  try {
    const newEvento = await evento.save();
    res.status(201).json(newEvento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Outras rotas (GET por ID, PUT, DELETE) podem ser adicionadas aqui.

module.exports = router;