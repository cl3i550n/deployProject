const { db } = require("../models/banco");

function execute(user, msg) {
    if (msg === "*") {
        db[user].stage = 0;
        return ["🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```"];
    }

    if (msg === "#") {
        db[user].stage = 3;
        return ["🗺️ Agora, informe o *ENDEREÇO*. \n ( ```Nome, Rua, Número, Bairro``` ) \n" +
            "Acrecente nome de quem irá receber a entrega \n\n" +
            "\n-----------------------------------\n*️⃣ - ```CANCELAR pedido```"];
    }

    let resumo = "  RESUMO DO PEDIDO \n\n";
    db[user].itens.forEach((value) => {
        const total = value.price;
        console.log(value);
        resumo += `Pedido: ${value.description} -------- R$ ${value.price} \n`;

        total += value.price;
    });

    resumo += "-----------------------------------\n\n";
    resumo += ` Total R$ ${total} \n\n`;
    resumo += "\n-----------------------------------\n#️⃣ - ```FINALIZAR pedido``` \n*️⃣ - ```CANCELAR pedido```"

    return [resumo];
}

exports.execute = execute;