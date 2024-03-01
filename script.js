const limites = [10, 11, 20, 21, 50, 51, 80, 81, 90, 91, 100, 101];
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function determinarNivel(saldo) {
  let nivel = "";

  for (let i = 0; i < limites.length; i++) {
    if (saldo < limites[i]) {
      nivel = niveis[i];
      break;
    }
  }

  return nivel;
}

function meuRank(vitorias, derrotas) {
  const saldo = calcularSaldo(vitorias, derrotas);
  const nivel = determinarNivel(saldo);

  return O Herói tem de saldo de ${saldo} e está no nível de ${nivel};
}

console.log(meuRank(50, 20));
