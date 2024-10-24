const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/vagas', (req, res) => {
  res.json([
    {
      _id: '66f48c177c2673b11d632a30',
      titulo: 'Desenvolvedor Frontend',
      empresa: 'Tech Solutions',
      nivel: 'Pleno',
      area: 'Desenvolvimento',
      salario: 5000,
      responsavel: 'Carlos Silva',
      contatoEmail: 'carlos.silva@techsolutions.com',
      contatoCelular: '11987654321',
      atribuicoes: 'Desenvolver interfaces de usuário, colaborar com designers e equipes de backend.',
      competenciasNecessarias: 'JavaScript, React, CSS, HTML.',
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
