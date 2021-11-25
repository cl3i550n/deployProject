const { db } = require("../models/banco");
const { step } = require("../models/stages");

function execute(user, msg) {
    if (msg === "*") {
        db[user].stage = 0;
        return ["🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```"];
    }

    if (msg === "#") {
        db[user].stage = 5;

        return step[5].obj.execute(user, "");
    }
    return [
        `Confirma endereco de entrega : \n ${msg}` + "\n-----------------------------------\n#️⃣ - *FINALIZAR pedido* \n*️⃣ - *CANCELAR pedido*"
    ];
}

exports.execute = execute;