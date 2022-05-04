// OPERADORES ARITMÉTICOS
const [a, b, c, d] = [3, 5, 1, 15];
console.log(a, b, c);

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2
console.log(soma, subtracao, multiplicacao, divisao, modulo);

// OPERADORES RELACIONAIS
console.log('01)', '1' == 1); // true - compara valor
console.log('02)', '1' === 1); // false - compara o valor e o tipo
console.log('03)', '3' != 3); // false - compara valor
console.log('04)', '3' !== 3); // true - compara valor e tipo
console.log('05)', 3 < 2); // false - compara valor
console.log('06)', 3 > 2); // true - compara valor
console.log('07)', 3 <= 2); // false - compara valor
console.log('08)', 3 >= 2); // true - compara valor

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2); // false - compara valor e tipo
console.log('10)', d1 == d2); // false - compara valor
console.log('11)', d1.getTime() === d2.getTime()); // true - compara valor e tipo
console.log('12)', undefined == null) // true - compara valor
console.log('13)', undefined === null) // false - compara valor e tipo

// OPERADORES LÓGICOS

// && - AND - E
// V E V = V
// V E F = F
// F E V = F
// F E F = F

// || - OR - OU
// V OU V = V
// V OU F = V
// F OU V = V
// F OU F = F

// XOR - OU EXCLUSIVO
// V XOR V = F
// V XOR F = V
// F XOR V = V
// F XOR F = F

// ! - NOT - NÃO
// !V = F
// !F = V

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // objeto literal, cria um par chave/valor a partir de cada variável, utilizando o nome da variável para a chave
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

// OPERADORES UNÁRIOS

let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1 // decrementa o valor da variável, o operador precendendo a variável é executado primeiro
console.log(num1)

console.log(++num1 === num2--) // compara primeiro antes de decrementar.
console.log(num1 === num2)

// OPERADORES TERNÁRIOS

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // primeira parte é a condição >= e se for verdeiro retorna a primeira parte, se for vermelho retorna a segunda parte
console.log(resultado(7.1))
console.log(resultado(6.7))


