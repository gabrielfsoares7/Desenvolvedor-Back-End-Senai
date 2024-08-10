var nome = "Gabriel";
//variavel que serve para amarzenar o nome do usuario

let sobrenome = "Soares";
//variavel que servirá para amarzenar o sobrenome do usuario

const nomeCompleto = nome + " " + sobrenome;
/* 
    Constante que concatena o nome do usúario
*/

console.log("Olá seu nome é " + nomeCompleto);

nome = "Ferreira";

console.log(`seu nome é ${nome} `);

let num1 = 7;
let num2 = 9;


//funçao que vai fazer a soma de dois numeros

function somar(numeroUm, numeroDois) {
    return numeroUm + numeroDois;
}

console.log(somar(num1, num2))
