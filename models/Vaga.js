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
    enum: ['Junior', 'Pleno', 'Senior', 'Trainee', 'Estagio', 'Freelancer', 'Tecnico', 'Auxiliar', 'Surpevisor', 'Gerente', 'Coordenador', 'Outro'],
    required: true,
  },
  area: {
    type: String,
    enum: ['Tecnologia', 'Designer', 'Marketing', 'Recursos Humanos', 'Ajudante', 'Vendedor', 'Administrativo', 'Outro'],
    required: true,
  },
  // salario: {
  //   type: Number, 
  //   required: true,
  // },
  salario: {
    type: String, 
    required: true,
    enum: [
      'até R$ 1.000,00',
      'R$ 1.001,00 até R$ 2.000,00',
      'R$ 2.001,00 até R$ 3.000,00',
      'R$ 3.001,00 até R$ 4.000,00',
      'R$ 4.001,00 até R$ 5.000,00',
      'R$ 5.001,00 até R$ 6.000,00',
      'R$ 6.001,00 até R$ 7.000,00',
      'acima de R$ 7.001,00',
      'A combinar'
    ],
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
  competencias: { 
    type: String,
    required: true,
  },
});

const Vaga = mongoose.model('Vaga', vagaSchema);
module.exports = Vaga;
