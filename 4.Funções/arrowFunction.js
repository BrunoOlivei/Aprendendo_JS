// AULA 1

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { // funções arrow sempre são anonimas, por isso devem ser armazenadas em uma variável ou contante
    return 2 * a
}

dobro = a => 2 * a // função arrow sem as chaves têm o retorno implícito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'Ola' // Possui um parâmetro que pode ser ignorado na chamada de função
console.log(ola())

// AULA 2

// Ao contrário do exemplo anterior, a função arrow já aponta o this para dentro da função, sem a necessidade de usar o bind.
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// AULA 3

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true

// Com arrow function o this aponta para o objeto no qual a função foi escrita
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

// Testando o bind em uma arrow function, se o bind muda o this
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) // true

// o this em uma arrow function é associado ao contexto ao qual a função foi escrita e isso não muda.