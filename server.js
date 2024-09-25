require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const vagasRoutes = require('./routes/vagas'); 

const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

app.use('/api/vagas', vagasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
