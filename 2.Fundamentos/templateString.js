const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"

console.log(concatenacao)

/* template é uma string que contém uma variável, utilizando ` ` (crase) para delimitar a string, 
* e ${nome_variavel} para referenciar a variável. Além disso o template pode conter quebras de linha e tabulações.
*/
const template = `
    Olá
    ${nome}!`
console.log(template) // retorna a string com as quebras de linha e tabulações além da variável.
console.log(`1 + 1 = ${1 + 1}`) // respeita a string sem transformar o tipo de dado em number.

const up = texto => texto.toUpperCase() // função arrow para transformar string em maiúsculo.

console.log(`Ei... ${up("cuidado")}!`) // retorna a string com a função up.

