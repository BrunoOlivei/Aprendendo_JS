const a = 7
let b = 3

b += a // b = b + a
console.log(b) // 10

b -= 4 // b = b - 4
console.log(b) // (10 - 4) = 6 

b *= 2 // b = b * 2
console.log(b) // (6 * 2) = 12

b /= 2 // b = b / 2
console.log(b) // (12 / 2) = 6

b %= 2 // b = b % 2
console.log(b) // Resto da divisão de 6 / 2 = 0

// OPERADOR DESTRUCTING - AULA 1

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade) // Ana 5

const {nome: n, idade: i} = pessoa
console.log(n, i) // Ana 5

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) // undefined true

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep) // Rua ABC 1000 undefined

// OPERADOR DESTRUCTING - AULA 2
// Utilizando arrays

const [x] = [10] // a = 10
console.log(xa)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // n1 = 10, n3 = 9, n5 = 8, n6 = 0
console.log(n1, n3, n5, n6) // 10 9 8 0

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // nota = 6
console.log(nota) // 6

// OPERADOR DESTRUCTING - AULA 3
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({max: 50, min: 40})) // 40 a 50
console.log(rand({min: 955})) // 0 a 1000
console.log(rand({})) // 0 a 1000
// Desestrutura o objeto para ser utilizado como argumento da função


// OPERADOR DESTRUCTING - AULA 4
function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // 40 a 50
console.log(rand([955])) // 0 a 1000
console.log(rand([, 10])) // 0 a 10
console.log(rand([])) // 0 a 1000
// Desestrutura o array para ser utilizado como argumento da função
