// pessoa -> 123 -> {...}
const pessoa = {nome: "João"}
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa <- 456 <- {...}
// pessoa = {nome: "Ana"} // TypeError: Assignment to constant variable

Object.freeze(pessoa) // Congela o objeto impossibilitando a alteração de seus atributos
pessoa.nome = "Maria" // Não altera o objeto e não acusa erro
console.log(pessoa) // {nome: "Pedro"}

pessoa.end = "Rua ABC" // Não altera, já que o objeto está congelado
delete pessoa.nome // Não altera, já que o objeto está congelado

console.log(pessoa.nome)