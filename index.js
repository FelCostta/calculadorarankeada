
let quantidadePontos = calcularVitorias(30, 5);
let EloDoHeroi;


function calcularVitorias (vitorias, derrotas) {
    let saldoPontuacao = vitorias - derrotas
    return saldoPontuacao
}


switch (true) {
    case  quantidadePontos <= 10:
        EloDoHeroi = "Ferro";
        break;
    case quantidadePontos >= 11 && quantidadePontos <= 20:
        EloDoHeroi = "Bronze";
        break;
    case quantidadePontos >= 21 && quantidadePontos <= 50:
        EloDoHeroi = "Prata";
        break;
    case quantidadePontos >= 51 && quantidadePontos <= 81:
        EloDoHeroi = "Ouro";
        break;
    case quantidadePontos >= 81 && quantidadePontos <= 90:
        EloDoHeroi = "Diamante";
        break;
    case quantidadePontos >= 91 && quantidadePontos <= 100:
        EloDoHeroi = "Lendário";
        break;
    case quantidadePontos >= 101:
        EloDoHeroi = "Imortal";
        break;
    default:
        EloDoHeroi = "Null";
}

console.log(`O Herói tem de Saldo ${quantidadePontos} Vitórias e está no Elo ${EloDoHeroi}!`);