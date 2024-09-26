const express = require('express');
const router = express.Router();
const Vaga = require('../models/Vaga'); 

router.get('/', async (req, res) => {
  try {
    const vagas = await Vaga.find();
    res.json(vagas);
  } catch (error) {
    res.status(500).send('Erro ao buscar vagas');
  }
});

router.post('/', async (req, res) => {
  console.log(req.body); 
  const novaVaga = new Vaga(req.body);
  try {
    const vagaSalva = await novaVaga.save();
    res.status(201).json(vagaSalva);
  } catch (error) {
    console.error(error); 
    res.status(400).send('Erro ao criar vaga');
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const vagaExcluida = await Vaga.findByIdAndDelete(id);
    if (!vagaExcluida) {
      return res.status(404).send('Vaga não encontrada');
    }
    res.status(204).send('Vaga excluída com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao excluir vaga');
  }
});

module.exports = router;
