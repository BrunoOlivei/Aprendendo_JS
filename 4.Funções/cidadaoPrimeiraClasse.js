// AULA 1
// Função em JS é Firts-Class Object (Citizens)
// Higher-order function

// Criando função de forma literal
function fun1(){
}

// Armazenar uma função a uma variável
const fun2 = function() { }

// Armazenar função em uma array
const array = [function (a, b) {return a + b}, fun1, fun2]

console.log(array[0](2, 3))

// Armazenar função em um atributo de objeto
const obj = {}
obj.falar = function() {return "Opa"}
console.log(obj.falar())

// Passando uma função como parâmetro de outra função
function run(fun){
    fun()
}

run(function() {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)

const cincoMais = soma(2, 3)
cincoMais(4)

// AULA 2
// Parâmetros e retornos são opcionais

function area(largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))

// AULA 3
// Parâmetros variáveis

function soma(){
    let soma = 0
    for (let i in arguments){
        soma += arguments[i]
    }
    return soma
}

// A palavra reservada arguments cria um array com os argumentos passados na função

console.log(soma()) // 0
console.log(soma(1)) // 1
console.log(soma(1.1, 2.2, 3.3)) // 6.6
console.log(soma(1.1, 2.2, "Teste")) // 3.30Teste
console.log(soma("a", "b", "c")) // 0abc

// AULA 4
// Parâmetros padrão

// Estratégia 1 para gerar valor padrão - Muito utilizada

function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1()) // 3
console.log(soma1(3)) // 5
console.log(soma1(1, 2, 3)) // 6
console.log(soma1(0, 0, 0)) // 3

// Estratégia 2
function soma2(a, b, c){
    a = a != undefined ? a : 1
    b = b != undefined ? b : 1
    c = c != undefined ? c : 1
    return a + b + c
}

console.log(soma2()) // 3
console.log(soma2(3)) // 5
console.log(soma2(1, 2, 3)) // 6
console.log(soma2(0, 0, 0)) // 0

// Estratégia 3
function soma3(a, b, c){
    a = 0 in arguments ? a : 1
    b = 1 in arguments ? b : 1
    c = 2 in arguments ? c : 1
    return a + b + c
}

console.log(soma3()) // 3
console.log(soma3(3)) // 5
console.log(soma3(1, 2, 3)) // 6
console.log(soma3(0, 0, 0)) // 0

// Estratégia 4 - Mais segura
function soma4(a, b, c){
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma4()) // 3
console.log(soma4(3)) // 5
console.log(soma4(1, 2, 3)) // 6
console.log(soma4(0, 0, 0)) // 0


// Usando o valor padrão do ES2015 - Forma mais adequada
function soma5(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma5()) // 3
console.log(soma5(3)) // 5
console.log(soma5(1, 2, 3)) // 6
console.log(soma5(0, 0, 0)) // 0
