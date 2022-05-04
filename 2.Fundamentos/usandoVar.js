// A variável declarada com var fica visivel fora do escopo, por isso não é recomendado.
{{{var sera = "Será???";}}} 
console.log(sera)


// a variável local é visível apenas dentro do escopo, por se tratar de uma função, mesmo sendo declarado com var.
function teste() {
    var local = 123
}

teste()
// console.log(local) // Erro, pois a variável local não está visível fora do escopo.

// AULA 2
var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero) // 2
}
console.log('fora = ', numero) // 2

// Variáveis declaradas com var não respeitam escopo delimitado de blocos, salvo quando é declarada dentro de uma função.

// USANDO VAR EM LOOP
for (var i = 0; i < 10; i++){
    console.log(i) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
console.log('i = ', i) // 10

var funcs = []
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // 10
funcs[8]() // 10

// Conceito de clojure.
