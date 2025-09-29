const mongoose = require('mongoose');

const InformacaoSubtopicoSchema = new mongoose.Schema({
    informacao: { type: String, required: true },
});

const SubtopicoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  informacoes: [InformacaoSubtopicoSchema],
});

const TopicoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  subtopicos: [SubtopicoSchema],
});

module.exports = mongoose.model('Topico', TopicoSchema);