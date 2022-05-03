const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2) // 1.0 2.0
console.log(Number.isInteger(peso1)) // true
console.log(Number.isInteger(peso2)) // true

const avaliacao1 = 9.871
const avaliacao2 = 6.871

console.log(Number.isInteger(avaliacao1)) // false
console.log(Number.isInteger(avaliacao2)) // false
console.log(Number.isFinite(avaliacao1)) // true
console.log(Number.isFinite(avaliacao2)) // true

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// Cada tipo de dados possui suas próprias funções, para acessá-las utiliza-se . (ponto) e o nome da função:

console.log(media.toFixed(2)) // toFixed(2) -> limita o número de casas decimais
console.log(media.toString()) // toString() -> converte o número para string
console.log(media.toString(2)) // toString(2) -> converte para binário
console.log(typeof media) // number
console.log(typeof Number) // function

// Number com N maiúsculo é uma função, enquanto number com n minúsculo é um tipo de dados.

// ALGUNS CUIDADOS COM NÚMEROS

console.log(7 / 0) // Infinity
console.log(7 / -0) // -Infinity
console.log("10" / 2) // 5 // JavaScript já converte o tipo de dados para number
console.log("3" + 2) // 32 // No caso da soma a string tem preferencia e o resultado é uma concatenação
console.log("10,2" / 2) // NaN -> Not a Number devido a vírgula, já que no js decimais são declarados com . (ponto)
console.log("Show" * 2) // NaN
console.log(0.1 + 0.7) // 
// console.log(10.toString()) // Exceção 
console.log((10.345).toFixed(2)) // 10.35