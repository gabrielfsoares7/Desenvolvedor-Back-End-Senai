const readlineSync = require("readline-sync");

let materia = readlineSync.question("Insira a materia?");

let notaQnt = readlineSync.questionFloat("Quantas notas voce quer adicionar?");

if (notaQnt <= 0) {
  return console.log("Quantidade de notas invalido");
}

let notas = [];

for (let i = 0; i < notaQnt; i++) {
  let notaNova = readlineSync.questionFloat(`Digite a ${i + 1} nota: `);
  notas.push(notaNova);
}

let media = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;

console.log(`A média das notas de ${materia} é ${media.toFixed(2)}`);
