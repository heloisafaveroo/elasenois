const mongoose = require('mongoose');
const SobreTopicoSchema = new mongoose.Schema({
titulo: { type: String, required: true },
texto: { type: String },
});
module.exports = mongoose.model('SobreTopico', SobreTopicoSchema);
