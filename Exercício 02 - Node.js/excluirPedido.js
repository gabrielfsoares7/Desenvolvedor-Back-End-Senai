const readline = require("readline-sync");
const fs = require("fs");

const excluir = async (caminho) => {
    const visualizar = require('./visualizarPedidos');
    const pedidos = await visualizar.objPedidos(caminho)

    await visualizar.apresentarPedidos(pedidos);

    let qtd = pedidos.length;

    if (qtd >= 1) {
        let opcao = readline.questionInt("\nSelecione um pedido para excluir:");
        while (opcao < 1 || opcao > qtd + 1 ) {
            console.log("OPÇÃO INVÁLIDA")
            let opcao = readline.questionInt("\nSelecione uma pedido para excluir:");
        }

        pedidos.splice(opcao-1,1);

        const pedidosJSON = JSON.stringify(pedidos.filter(Boolean));


        try{
            fs.writeFileSync(caminho, pedidosJSON)
            console.log("Pedido excluida  com sucesso")
        } catch (err){
            console.error('Erro ao excluir a tarefa', err)

        }
    }

}

module.exports = excluir;
