// DECLARANDO VARIÁVEIS

let nome = "Caneta";
let quantidade = 10;
let preco = 6.4
var imposto = 1.5
var precoFinal = preco + imposto;

console.log(nome);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(preco + imposto);
console.log(precoFinal);

// TIPO DE DADOS

let idade = 31;
console.log(typeof idade); // number
console.log(typeof 31); // number

let salario = 12.5;
console.log(typeof salario); // number
console.log(typeof 12.5); // number

let estaChovendo = true;
console.log(typeof estaChovendo); // boolean
console.log(typeof true); // boolean

let texto = "teste";
console.log(typeof texto); // string
console.log(typeof "teste"); // string

// ALTERANDO O VALOR DE UMA VARIÁVEL

idade = 32;

console.log(idade);

idade = idade + 1;

console.log(idade);

// CONTANTES

const id = 123;
console.log(id);

// Constantes não podem ser alteradas

// DESAFIO 1

// PI * raio * raio

let raio = 10;
const PI = 3.141592;

Math.PI

let area = PI * raio * raio;
console.log(area + " metros quadrados");

area = Math.PI * Math.pow(raio, 2);
console.log(area + " metros quadrados");

// DESAFIO 2

let a = 7;
let b = 94;

// troca de valores entre variáveis
/* let temp = a;
a = b;
b = temp; */

// troca de valores entre variáveis
[a, b] = [b, a];

console.log(a);
console.log(b);
