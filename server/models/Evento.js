const mongoose = require('mongoose');

const FotoEventoSchema = new mongoose.Schema({
  caminho_da_foto: { type: String, required: true },
});

const EventoSchema = new mongoose.Schema({
  nome_do_evento: { type: String, required: true },
  data: { type: Date, required: true },
  local: { type: String, required: true },
  descricao: { type: String },
  fotos: [FotoEventoSchema],
});

module.exports = mongoose.model('Evento', EventoSchema);