// nome
let nome = prompt("Digite seu nome:");

// renda
let renda = Number(prompt("Digite sua renda mensal:"));
while (isNaN(renda)) {
    renda = Number(prompt("Valor inválido. Digite sua renda mensal:"));
}

// quantidade de despesas
let qtd = Number(prompt("Quantas despesas você quer informar? (1 a 5)"));
while (isNaN(qtd)) {
    qtd = Number(prompt("Valor inválido. Digite um número entre 1 e 5:"));
}

// limitar entre 1 e 5
if (qtd < 1) {
    qtd = 1;
} else if (qtd > 5) {
    qtd = 5;
}

// despesas
let total = 0;

for (let i = 1; i <= qtd; i++) {
    let valor = Number(prompt("Digite o valor da despesa " + i + ":"));

    while (isNaN(valor)) {
        valor = Number(prompt("Valor inválido. Digite novamente a despesa " + i + ":"));
    }

    total += valor;
}

// cálculo
let sobra = renda - total;
let mensagem = "";

// condição
if (total > renda) {
    mensagem = "Atenção: você gastou mais do que ganhou.";
} else if (sobra >= renda * 0.3) {
    mensagem = "Ótimo: você teve uma boa sobra.";
} else {
    mensagem = "Ok: mas dá para melhorar.";
}

// resultado
let texto =
    "Nome: " + nome + "\n" +
    "Renda: R$ " + renda.toFixed(2) + "\n" +
    "Despesas: R$ " + total.toFixed(2) + "\n" +
    "Sobra: R$ " + sobra.toFixed(2) + "\n" +
    mensagem;

alert(texto);
console.log(texto);