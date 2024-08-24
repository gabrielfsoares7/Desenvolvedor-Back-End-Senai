const readline = require("readline-sync");
const fs = require("fs");

const atualizar = async (caminho) => {
    const visualizar = require('./visualizarPedidos');
    const pedidos = await visualizar.objPedidos(caminho)

    await visualizar.apresentarPedidos(pedidos);

    let qtd = pedidos.length;

    if (qtd >= 1) {
        let opcao = readline.questionInt("\nSelecione um pedido para atualizar o status:");
        while (opcao < 1 || opcao > qtd + 1 ) {
            console.log("OPÇÃO INVÁLIDA")
            let opcao = readline.questionInt("\nSelecione uma pedido para atualizar o status:");
        }

        pedidos[opcao - 1].status = pedidos[opcao - 1].status === 0 ? 1 : 0;

        const pedidosJSON = JSON.stringify(pedidos);
        try{
            fs.writeFileSync(caminho, pedidosJSON)
            console.log("Pedidos atualizada com sucesso")
        } catch (err){
            console.error('Erro ao atualizar o pedido', err)

        }
    }

}

module.exports = atualizar;
