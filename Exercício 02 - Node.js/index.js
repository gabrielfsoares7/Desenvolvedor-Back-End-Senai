const readline = require("readline-sync");
const fs = require("fs");

const caminhoDoArquivo = './listaDeTarefas.json';

const adicionarPedidos = require('./adicionarPedidos.js');
const visualizarPedidos = require('./visualizarPedidos.js');
const atualizarPedidos = require("./atualizarStatusPedidos.js");
const excluirPedido = require('./excluirPedido.js')

const criarArquivoSeNaoExiste = async (caminho) => {
    if (!fs.existsSync(caminho)) { //Conferir se o arquivo existe
        try {
            fs.writeFileSync(caminho, "[]")
        } catch (err) {
            console.error("Erro ao criar o arquivo:", err);
        }
    }
}

const exibirMenuDePedidos = async () => {
    console.log("--------------------------------");
    const opcao = readline.questionInt(" 1- Adicionar Pedido;\n 2- Visualizar Pedido;\n 3- Atualizar status de Pedido;\n 4- Excluir pedido;\n 5- Sair\n\n Escolha uma opção:");
    console.log("--------------------------------");

    switch (opcao) {
        case 1:
            await adicionarPedidos(caminhoDoArquivo,visualizarPedidos.objPedidos(caminhoDoArquivo));
            break;
        case 2:
            await visualizarPedidos.apresentarPedidos(visualizarPedidos.objPedidos(caminhoDoArquivo));
            break;
        case 3:
            await atualizarPedidos(caminhoDoArquivo);
            break;
        case 4:
            await excluirPedido(caminhoDoArquivo);
            break;
        case 5:
            return false;
            break;
        default:
            console.log("Opção inválida!");
    }
    return true;
};

const executarMenuPrincipal = async ()=>{
    let continuar = true;
    while(continuar){
        continuar = await exibirMenuDePedidos();
    }
}

const main = async () =>{
    await criarArquivoSeNaoExiste(caminhoDoArquivo);
    await executarMenuPrincipal();
}

main();