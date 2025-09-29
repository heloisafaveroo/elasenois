const mongoose = require('mongoose');

const ProjetoApoioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  contato: { type: String },
  link: { type: String },
});

module.exports = mongoose.model('ProjetoApoio', ProjetoApoioSchema);