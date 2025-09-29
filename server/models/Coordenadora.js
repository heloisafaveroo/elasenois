const mongoose = require('mongoose');

const CoordenadoraSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  profissao: { type: String },
  descricao: { type: String },
  caminho_da_foto: { type: String },
});

module.exports = mongoose.model('Coordenadora', CoordenadoraSchema);
