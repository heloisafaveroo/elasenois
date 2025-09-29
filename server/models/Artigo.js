const mongoose = require('mongoose');

const ArtigoSchema = new mongoose.Schema({
  titulo_do_artigo: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number },
  breve_descricao: { type: String },
  link: { type: String },
});

module.exports = mongoose.model('Artigo', ArtigoSchema);