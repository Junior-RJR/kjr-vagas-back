const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Vaga = require('./models/Vaga');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simulação de banco de dados (em memória)
// let vagas = [
//   {
//     _id: '66f48c177c2673b11d632a30',
//     titulo: 'Desenvolvedor Frontend',
//     empresa: 'Tech Solutions',
//     nivel: 'Pleno',
//     area: 'Desenvolvimento',
//     salario: 5000,
//     responsavel: 'Carlos Silva',
//     contatoEmail: 'carlos.silva@techsolutions.com',
//     contatoCelular: '11987654321',
//     atribuicoes: 'Desenvolver interfaces de usuário, colaborar com designers e equipes de backend.',
//     competenciasNecessarias: 'JavaScript, React, CSS, HTML.',
//   }
// ];

app.get('/api/vagas', (req, res) => {
  res.json(vagas);
});

app.post('/api/vagas', (req, res) => {
  const novaVaga = { id: vagas.length + 1, ...req.body };
  vagas.push(novaVaga);
  res.status(201).json(novaVaga); 
});

app.delete('/api/vagas/:id', (req, res) => {
  const { id } = req.params;
  vagas = vagas.filter(vaga => vaga.id !== parseInt(id));
  res.status(204).send(); 
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


// app.get('/api/vagas', async (req, res) => {
//   try {
//     const vagas = await Vaga.find();
//     res.json(vagas);
//   } catch (error) {
//     res.status(500).send('Erro ao buscar vagas');
//   }
// });

// app.post('/api/vagas', async (req, res) => {
//   const novaVaga = new Vaga(req.body);
//   try {
//     const vagaSalva = await novaVaga.save(); 
//     res.status(201).json(vagaSalva);
//   } catch (error) {
//     res.status(400).send('Erro ao criar vaga');
//   }
// });

// app.delete('/api/vagas/:id', async (req, res) => {
//   try {
//     const vagaExcluida = await Vaga.findByIdAndDelete(req.params.id);
//     if (!vagaExcluida) {
//       return res.status(404).send('Vaga não encontrada');
//     }
//     res.status(204).send('Vaga excluída com sucesso');
//   } catch (error) {
//     res.status(500).send('Erro ao excluir vaga');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });