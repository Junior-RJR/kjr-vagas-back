const mongoose = require('mongoose');

const vagaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  empresa: {
    type: String,
    required: true,
  },
  nivel: {
    type: String,
    enum: ['Junior', 'Pleno', 'Senior'],
    required: true,
  },
  area: {
    type: String,
    enum: ['Desenvolvimento', 'Design', 'Marketing', 'Recursos Humanos'],
    required: true,
  },
  salario: {
    type: Number, // Certifique-se de que você está enviando um número do front-end
    required: true,
  },
  responsavel: {
    type: String,
    required: true,
  },
  contatoEmail: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
  contatoCelular: {
    type: String,
    required: true,
  },
  atribuicoes: {
    type: String,
    required: true,
  },
  competenciasNecessarias: { // Mudança aqui
    type: String,
    required: true,
  },
});

const Vaga = mongoose.model('Vaga', vagaSchema);
module.exports = Vaga;
