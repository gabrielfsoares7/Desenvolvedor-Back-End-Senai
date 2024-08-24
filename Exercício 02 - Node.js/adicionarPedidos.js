const readline = require("readline-sync");
const fs = require("fs");

const adicionarPedido = async (caminho, listaDePedidos) =>{

    let pedidos = await listaDePedidos;

    let qtdPedidos = pedidos.length + 1;

    let novaPedido = {
        id: qtdPedidos,
        nome: readline.question('\nDigite seu lanche: '),
        acompanhamento: readline.question('Digite seu acompanhamento: '),
        bebida: readline.question('Digite sua Bebida: '),
        status: 0 // 0 define atividade não concluída
    }

    pedidos.push(novaPedido);

    const pedidoJSON = JSON.stringify(pedidos);

    try{
        fs.writeFileSync(caminho, pedidoJSON);
        console.log('Pedido adicionada com sucesso!');
    }catch(err){
        console.error("Erro ao adicionar a pedido:",err);
    }

}

module.exports = adicionarPedido;