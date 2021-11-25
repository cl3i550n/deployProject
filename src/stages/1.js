const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");

function execute(user, msg) {
    if (msg === "*") {
        db[user].stage = 0;
        return ["🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```"];
    }

    if (msg === "#") {
        db[user].stage = 2;
        return [
            "Deseja algo mais?" +
            "\n-----------------------------------\n#️⃣ - ```FINALIZAR pedido``` \n*️⃣ - ```CANCELAR pedido```"
        ];
    }

    if (!menu0[msg]) {
        return ["❌ *Código inválido, digite novamente!*"];
    }

    db[user].itens.push(menu0[msg]);

    return [
        `O ${menu0[msg].description} foi adicionado ao carrinho` +
        "\n-----------------------------------\n#️⃣ - ```FINALIZAR pedido``` \n*️⃣ - ```CANCELAR pedido```"
    ];
}

exports.execute = execute;