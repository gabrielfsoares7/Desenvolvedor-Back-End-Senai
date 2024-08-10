const readline = require("readline-sync");

const somar = require("./somar.js");
const sub = require("./subtracao.js");
const multi = require("./multiplicar.js");
const divisao = require("./divisao.js");

let continuar;

do {
    let numOne = readline.questionFloat("Digite um número 1:\n");
    let numTwo = readline.questionFloat("Digite um número 2:\n");

    let opercao = readline.question("Digite uma das seguintes operações + para somar; - para subtrair; * para multiplicar; / para dividir\n");

    while (opercao !== '+' && opercao !== "-" && opercao != "*" && opercao !== "/") {
        opercao = readline.question("OPERAÇÃO INVALIDA\n Digite uma das seguintes operações + para somar; - para subtrair; * para multiplicar; / para dividir\n")


    }

    let result = 0

    switch (opercao) {
        case "+":
            result = somar(numOne, numTwo);
            break;
        case "-":
            result = sub(numOne, numTwo);
            break;
        case "*":
            result = multi(numOne, numTwo);
            break;
        case "/":
            result = divisao(numOne, numTwo);
            break;
        default:
            console.log("Operação Invalida")
            break;
    }
    console.log(`Resultado: ${result}`)

    let respostaUser = readline.question("Para continuar digite algo\n")
    if (respostaUser == "") {
        continuar = false
    } else {
        continuar = true
    }

} while (continuar);