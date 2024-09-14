const readlineSync = require('readline-sync'); // Importa o módulo readline-sync para permitir a interação com o usuário via terminal.

class Veiculo {
    // Define a classe base Veiculo, que representa um veículo genérico.
    constructor(marca, modelo, ano, cor, velocidade, statusVeiculo) {
        // Inicializa as propriedades do veículo.
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
        this._cor = cor;
        this._velocidade = velocidade;
        this._statusVeiculo = statusVeiculo;
    }

    acelerarVeiculo() {
        // Aumenta a velocidade do veículo em 10 unidades.
        this._velocidade += 10;
    }

    freiarVeiculo() {
        // Diminui a velocidade do veículo em 10 unidades.
        this._velocidade -= 10;
    }

    ligarVeiculo() {
        // Define o status do veículo como "Ligado".
        this._statusVeiculo = "Veículo Ligado";
    }

    desligarVeiculo() {
        // Define o status do veículo como "Desligado".
        this._statusVeiculo = "Veículo Desligado";
    }

    mostrarInfo() {
        // Retorna uma string com as informações do veículo.
        return `Marca: ${this._marca}, Modelo: ${this._modelo}, Ano: ${this._ano}, Cor: ${this._cor}, Velocidade: ${this._velocidade}, Status: ${this._statusVeiculo}`;
    }
}

class Carro extends Veiculo {
    // Define a classe Carro, que herda de Veiculo e adiciona funcionalidades específicas para carros.
    constructor(marca, modelo, ano, cor, velocidade, statusVeiculo, porta) {
        super(marca, modelo, ano, cor, velocidade, statusVeiculo);
        // Inicializa as propriedades específicas do carro.
        this._porta = porta;
    }

    abrirPorta() {
        // Define o status da porta como "Porta Aberta".
        this._porta = "Porta Aberta";
    }

    fecharPorta() {
        // Define o status da porta como "Porta Fechada".
        this._porta = "Porta Fechada";
    }

    mostrarInfo() {
        // Retorna as informações do carro, incluindo o status da porta.
        return super.mostrarInfo() + `, Porta: ${this._porta}`;
    }
}

class Moto extends Veiculo {
    // Define a classe Moto, que herda de Veiculo e adiciona funcionalidades específicas para motos.
    constructor(marca, modelo, ano, cor, velocidade, statusVeiculo, empinar) {
        super(marca, modelo, ano, cor, velocidade, statusVeiculo);
        // Inicializa as propriedades específicas da moto.
        this._empinar = empinar;
    }

    empinarMoto() {
        // Define o status da moto como "Moto Empinada".
        this._empinar = "Moto Empinada";
    }

    mostrarInfo() {
        // Retorna as informações da moto, incluindo se está empinada ou não.
        return super.mostrarInfo() + `, Empinar: ${this._empinar}`;
    }
}

const veiculos = [];
// Cria um array para armazenar os veículos cadastrados.

function adicionarVeiculo() {
    // Função para adicionar um novo veículo.
    const tipo = readlineSync.question('Digite o tipo do veículo (Carro/Moto): ');

    const marca = readlineSync.question('Digite a marca do veículo: ');
    const modelo = readlineSync.question('Digite o modelo do veículo: ');
    const ano = readlineSync.question('Digite o ano do veículo: ');
    const cor = readlineSync.question('Digite a cor do veículo: ');
    const velocidade = parseInt(readlineSync.question('Digite a velocidade inicial do veículo: '), 10);
    const statusVeiculo = readlineSync.question('Digite o status do veículo (Ligado/Desligado): ');

    if (tipo.toLowerCase() === 'carro') {
        const porta = readlineSync.question('Digite o status da porta (Aberta/Fechada): ');
        veiculos.push(new Carro(marca, modelo, ano, cor, velocidade, statusVeiculo, porta));
    } else if (tipo.toLowerCase() === 'moto') {
        const empinar = readlineSync.question('Digite se a moto está empinada (Sim/Não): ');
        veiculos.push(new Moto(marca, modelo, ano, cor, velocidade, statusVeiculo, empinar));
    } else {
        console.log('Tipo de veículo inválido.');
    }
}

function listarVeiculos() {
    // Função para listar todos os veículos cadastrados.
    if (veiculos.length === 0) {
        console.log('Nenhum veículo cadastrado.');
        return;
    }

    veiculos.forEach((veiculo, index) => {
        console.log(`Veículo ${index + 1}: ${veiculo.mostrarInfo()}`);
    });
}

function acelerarVeiculo() {
    // Função para acelerar um veículo específico.
    if (veiculos.length === 0) {
        console.log('Nenhum veículo cadastrado.');
        return;
    }

    listarVeiculos();
    const index = parseInt(readlineSync.question('Digite o número do veículo que deseja acelerar: '), 10) - 1;

    if (index >= 0 && index < veiculos.length) {
        veiculos[index].acelerarVeiculo();
        console.log(`Veículo ${index + 1} acelerado. Velocidade atual: ${veiculos[index]._velocidade}`);
    } else {
        console.log('Número de veículo inválido.');
    }
}

function menu() {
    // Função para exibir o menu e processar a escolha do usuário.
    while (true) {
        console.log('\nMenu:');
        console.log('1. Adicionar Veículo');
        console.log('2. Listar Veículos');
        console.log('3. Acelerar Veículo');
        console.log('4. Sair');

        const escolha = readlineSync.question('Escolha uma opção: ');

        if (escolha === '1') {
            adicionarVeiculo();
        } else if (escolha === '2') {
            listarVeiculos();
        } else if (escolha === '3') {
            acelerarVeiculo();
        } else if (escolha === '4') {
            console.log('Saindo...');
            break;
        } else {
            console.log('Opção inválida. Tente novamente.');
        }
    }
}

menu(); 