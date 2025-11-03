const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB com sucesso!'))
.catch(err => console.error('Não foi possível conectar ao MongoDB:', err));

// O Node.js adiciona a extensão .js automaticamente. Não inclua a extensão aqui.
app.use('/api/eventos', require('./routes/eventos'));
app.use('/api/artigos', require('./routes/artigos'));
app.use('/api/topicos', require('./routes/topicos'));
app.use('/api/projetos-apoio', require('./routes/projetosApoio'));
app.use('/api/sobre-topico', require('./routes/sobreTopico'));
app.use('/api/coordenadoras', require('./routes/coordenadoras'));
app.use('/api/cadastros', require('./routes/cadastros'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));