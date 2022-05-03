// Funcao sem retorno
function imprimiSoma(a, b) {
    console.log(a + b)
}
imprimiSoma(2, 3)
imprimiSoma(2) // NaN
imprimiSoma(2, 10, 4, 5, 6, 7, 8) // 2 + 10 = 12
imprimiSoma() // NaN

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

soma(2, 3) // 
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

// ARMAZENANDO UMA FUNÇÃO EM UMA VARIAVEL

// Função anônima (sem nome)
const imprimiSoma2 = function (a, b) {
    console.log(a + b)
}

imprimiSoma(2, 3)

// Função arrow em uma variável
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(2, 3)) // 5

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3)) // -1
