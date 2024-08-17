const readlineSync = require("readline-sync");

// Função para calcular o desconto do INSS
function calcularDescontoINSS(salarioBruto) {
  let desconto;
  if (salarioBruto <= 1412.0) {
    desconto = salarioBruto * 0.075;
  } else if (salarioBruto <= 2666.68) {
    desconto = salarioBruto * 0.09;
  } else if (salarioBruto <= 4000.03) {
    desconto = salarioBruto * 0.12;
  } else if (salarioBruto <= 7786.02) {
    desconto = salarioBruto * 0.14;
  } else {
    desconto = 7786.02 * 0.14; // Teto de contribuição para o INSS
  }

  return desconto;
}

// Função para calcular o desconto do Imposto de Renda
function calcularDescontoIR(salarioBase) {
  let descontoIR;
  const faixa1 = 2112.00;
  const faixa2 = 2826.65;
  const faixa3 = 3751.05;
  const faixa4 = 4664.68;

  if (salarioBase <= faixa1) {
    descontoIR = 0;
  } else if (salarioBase <= faixa2) {
    descontoIR = (salarioBase - faixa1) * 0.075 - 158.40;
  } else if (salarioBase <= faixa3) {
    descontoIR = (salarioBase - faixa2) * 0.15 - 370.40;
  } else if (salarioBase <= faixa4) {
    descontoIR = (salarioBase - faixa3) * 0.225 - 651.73;
  } else {
    descontoIR = (salarioBase - faixa4) * 0.275 - 884.96;
  }

  return descontoIR;
}

// Função principal para calcular o salário líquido
function calcularSalarioLiquido(salarioBruto) {
  const descontoINSS = calcularDescontoINSS(salarioBruto);
  const salarioBase = salarioBruto - descontoINSS;
  const descontoIR = calcularDescontoIR(salarioBase);
  const salarioLiquido = salarioBase - descontoIR;

  return {
    salarioBruto,
    descontoINSS,
    salarioBase,
    descontoIR,
    salarioLiquido,
  };
}

// Entrada do usuário usando readline-sync
const salarioBruto = readlineSync.questionFloat("Insira o salário bruto: ");

if (isNaN(salarioBruto) || salarioBruto <= 0) {
  console.log("Por favor, forneça um valor válido para o salário bruto.");
} else {
  const resultado = calcularSalarioLiquido(salarioBruto);
  console.log(`Salário Bruto: R$ ${resultado.salarioBruto.toFixed(2)}`);
  console.log(`Desconto INSS: R$ ${resultado.descontoINSS.toFixed(2)}`);
  console.log(`Salário Base para IR: R$ ${resultado.salarioBase.toFixed(2)}`);
  console.log(`Desconto IR: R$ ${resultado.descontoIR.toFixed(2)}`);
  console.log(`Salário Líquido: R$ ${resultado.salarioLiquido.toFixed(2)}`);
}
