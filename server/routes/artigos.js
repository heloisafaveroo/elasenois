const express = require('express');
const router = express.Router();
const Artigo = require('../models/Artigo');

// GET - Retorna todos os artigos
router.get('/', async (req, res) => {
  try {
    const artigos = await Artigo.find();
    res.json(artigos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Cria um novo artigo
router.post('/', async (req, res) => {
  const artigo = new Artigo({
    titulo_do_artigo: req.body.titulo_do_artigo,
    autor: req.body.autor,
    ano: req.body.ano,
    breve_descricao: req.body.breve_descricao,
    link: req.body.link,
  });
  try {
    const newArtigo = await artigo.save();
    res.status(201).json(newArtigo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Outras rotas (GET por ID, PUT, DELETE) podem ser adicionadas aqui.

module.exports = router;