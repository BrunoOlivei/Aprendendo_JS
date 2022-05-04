/*
var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero) // 2
}

console.log('fora = ', numero) // 1
*/

// As variáveis declaradas com let respeitam o escopo.

let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero) // 2
}

console.log('fora = ', numero) // 1

// USANDO LET EM LOOP
for (let i = 0; i < 10; i++){
    console.log(i)
}
// console.log('i = ', i) // Erro, pois i não está visível fora do escopo.

var funcs = []
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // 2
funcs[8]() // 8
