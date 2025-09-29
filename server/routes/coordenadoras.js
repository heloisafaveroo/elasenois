const express = require('express');
const router = express.Router();
const Coordenadora = require('../models/Coordenadora');

// GET - Retorna todas as coordenadoras
router.get('/', async (req, res) => {
  try {
    const coordenadoras = await Coordenadora.find();
    res.json(coordenadoras);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Cria uma nova coordenadora
router.post('/', async (req, res) => {
  const coordenadora = new Coordenadora({
    nome: req.body.nome,
    profissao: req.body.profissao,
    descricao: req.body.descricao,
    caminho_da_foto: req.body.caminho_da_foto,
  });
  try {
    const newCoordenadora = await coordenadora.save();
    res.status(201).json(newCoordenadora);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Outras rotas (GET por ID, PUT, DELETE) podem ser adicionadas aqui.

module.exports = router;