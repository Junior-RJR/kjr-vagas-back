require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const vagasRoutes = require('./routes/vagas'); // Certifique-se que o caminho está correto

const app = express();
const PORT = 5000;

// Middleware para parsing de JSON
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Registrar as rotas
app.use('/api/vagas', vagasRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
