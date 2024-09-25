const mongoose = require('mongoose');

const vagaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true, // campo obrigatório
  },
  empresa: {
    type: String,
    required: true, // campo obrigatório
  },
  nivel: {
    type: String,
    enum: ['Junior', 'Pleno', 'Senior'], // exemplo de níveis disponíveis
    required: true, // campo obrigatório
  },
  area: {
    type: String,
    enum: ['Desenvolvimento', 'Design', 'Marketing', 'Recursos Humanos'], // exemplo de áreas disponíveis
    required: true, // campo obrigatório
  },
  salario: {
    type: Number, // ou String, dependendo de como você quer armazenar
    required: true, // campo obrigatório
  },
  responsavel: {
    type: String,
    required: true, // campo obrigatório
  },
  contatoEmail: {
    type: String,
    required: true,
    match: /.+\@.+\..+/, // validação de email
  },
  contatoCelular: {
    type: String,
    required: true,
  },
  atribuicoes: {
    type: String,
    required: true, // campo obrigatório
  },
  competenciasNecessarias: {
    type: String,
    required: true, // campo obrigatório
  },
});

const Vaga = mongoose.model('Vaga', vagaSchema);
module.exports = Vaga;