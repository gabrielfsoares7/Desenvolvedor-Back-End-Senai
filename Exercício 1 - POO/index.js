const readlineSync = require('readline-sync');

class Pessoa {
  constructor(nome, idade, peso, altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {

    const imc = this.peso / (this.altura ^ 2);
    return imc.toFixed(2);
  }
}


function criarPessoa() {
  const nomePessoa = readlineSync.question('Digite o nome: ');
  const idadePessoa = readlineSync.questionInt('Digite a idade: ');
  const pesoPessoa = readlineSync.questionFloat('Digite o peso (em kg): ');
  const alturaPessoa = readlineSync.questionFloat('Digite a altura (em metros): ');


  return new Pessoa(nomePessoa, idadePessoa, pesoPessoa, alturaPessoa);
}

function resultado() {
  try {
    const pessoa = criarPessoa();
    const imc = pessoa.calcularIMC();
    console.log(`O IMC de ${pessoa.nome} é ${imc}.`);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

resultado()