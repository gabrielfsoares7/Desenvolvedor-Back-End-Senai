//intalar o readline-sync
//no terminal, dentro do projeto digite, "npm install readline-sync"

const readline = require("readline-sync");

let numOne = readline.questionFloat("Digite um número 1:\n");
let numTwo = readline.questionFloat("Digite um número 2:\n");

let opercao = readline.question("Digite uma das seguintes operações + para somar; - para subtrair; * para multiplicar; / para dividir\n");

while (opercao !== '+' && opercao !== "-" && opercao != "*" && opercao !== "/") {
    opercao = readline.question("OPERAÇÃO INVALIDA\n Digite uma das seguintes operações + para somar; - para subtrair; * para multiplicar; / para dividir\n")

}

switch (opercao) {
    case "+":
        result = numOne + numTwo;
        break;
    case "-":
        result = numOne - numTwo;
        break;
    case "*":
        result = numOne * numTwo;
        break;
    case "/":
        result = numOne / numTwo;
        break;
    default:
        console.log("Operação Invalida")
        break;
}

result = perseFloat(result.toFixed(2));

console.log(`Resultado: ${result}`)