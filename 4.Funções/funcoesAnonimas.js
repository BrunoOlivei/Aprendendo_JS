// AULA 1

// Funções anônimas são funções sem nome

// Podemos passar uma função anônima para uma constante:

// Função anônima armazenada a constante chamada soma que retorna a soma dos valores de 2 parâmetros
const soma = function (x, y) {
    return x + y
}

/* 
Função anônima armazenada em uma constante chamada imprimirResultado, que recebe 3 parâmetros, 
o dois primeiros parâmetros são valores e operação é opcional, assumindo soma como valor padrão.
como resultado, será chamada a operação passando os valores de a e b.
*/
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

// Essa função apenas imprime o reultado de uma operação realizada sobre 2 valores.

/*
Chama a função da constante imprimirResultado, passando 3 e 4 como argumentos, esses argumentos por sua vez 
são passados para a operacão, que no caso como não foi passado nenhum argumento, assume soma como padrão, 
passando os valores de 3 e 4 para a função da constante soma, o resultado de soma é impresso na tela.
*/
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)


// Passando uma função anônima como terceiro argumento da função em imprimirResultado
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

// Passando uma arrow function (anônima) como terceiro argumento da função em imprimirResultado
imprimirResultado(3, 4, (x, y) => x * y)

// Uma arrow function é necessáriamente anônima.

// Criando uma função anônima dentro de um objeto

const pessoa = {
    falar: function(){
        console.log("Opa")
    }
}

// Podemos chamar a função anônima utilizando a notação ponto.
pessoa.falar()
