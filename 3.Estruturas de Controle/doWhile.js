function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// Estrutura DO / WHILE executa pelo menos 1 vez o bloco de código.
// Nesse exemplo não há necessidade de declarar a variável de controle antes.

do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1)

console.log("Até a próxima!")