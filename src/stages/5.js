const { db } = require("../models/banco");
let estagioInterno = 0;

function execute(user, msg) {

    if (estagioInterno === 1) {
        db[user].stage = 4;

        return stages.step[4].obj.execute(user, "");
    }
    if (msg === "1") {
        estagioInterno++;
        return ["Digite o valor em dinheiro para levarmos o troco: "];
    }
    if (msg === "2") {
        return ["Enviaremos a maquininha junto a entrega! Aah! Aceitamos Crédito ou Débito!"]
    }
    if (msg === "3") {
        return ["Chave PIX - 000.000.000-00"]
    }
    return ["Escolha a forma de pagamento:\n\n1️⃣ - Dinheiro\n2️⃣ - Cartão\n3️⃣ - PIX"];
}

exports.execute = execute;