console.log("a = ", a)
var a = 2
console.log("a = ", a)

// Conceito de hoisting (subir variaveis). A variável a declarada com var é subida para o topo do escopo.

function teste(){
    console.log("a = ", a)
    var a = 2
    console.log("a = ", a)
}

teste()
console.log("a = ", a)

// Utilizando o Let não ocorre hoisting
console.log("a = ", a)
let a = 2
console.log("a = ", a)

