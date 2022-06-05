/*
* 1 - Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
* multiplicação e divisão desses valores.
*/

function operacoes(num1, num2) {
    console.log(`Soma: ${num1 + num2}`)
    console.log(`Subtração: ${num1 - num2}`)
    console.log(`Multiplicação: ${num1 * num2}`)
    console.log(`Divisão: ${num1 / num2}`)
}

operacoes(2, 3)

/*
* 2 - Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
* Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
* Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
* ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
* triângulo).
*/

function triangulo (lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log('Triângulo Equilátero')
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        console.log('Triângulo Isósceles')
    } else {
        console.log('Triângulo Escaleno')
    }
}

triangulo(2, 2, 2)
triangulo(2, 2, 3)
triangulo(2, 3, 1)

/*
* 3 - Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

const potencia = (base, expoente) => {
    console.log(Math.pow(base, expoente))
}

const potencia2 = (base, expoente) => console.log(Math.pow(base, expoente))

const potencia3 = function(base, expoente){
    console.log(Math.pow(base, expoente))
}

potencia(2, 2)
potencia(2, 3)
potencia2(2, 2)
potencia2(2, 3)
potencia3(2, 2)
potencia3(2, 3)

/*
* Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
* seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
* importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
* um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
* que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

