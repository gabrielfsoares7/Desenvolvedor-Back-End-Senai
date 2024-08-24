const readline = require("readline-sync");
const fs = require("fs");

const controller =  {
    objPedidos: async (caminho) => {
        try {

            const conteudo = fs.readFileSync(caminho, 'utf-8');

            const pedido = JSON.parse(conteudo); // parse -> JSON em Objeto | stringify -> Objeto em JSON

            return pedido;

        } catch (err) {
            console.error('Erro ao processar as pedido:', err);
        }
    },

    apresentarPedidos: async (objPedidos) => { // o parametro objterafas é o objeto que caminha as pedido
        const pedido = await objPedidos;

        let qtd = pedido.length;

        if(qtd >= 1){
            let status = "";
            
            for(let i=0; i<=qtd - 1; i++){
                status = pedido[i].status === 0 ? "Não está Pronto" : "Pedido Pronto";

                console.log(`\n ${i + 1}- Lanche: ${pedido[i].nome} | Acompanhamento: ${pedido[i].acompanhamento} | Bebida: ${pedido[i].bebida} | ${status}`)
            }

        }
        else{
            console.log("Nâo há pedido cadastradas!")

        }

    }
}

module.exports = controller;