// Conceito de herança - Aula 1

/*
const ferrari = {
    modelo: "F40",
    velocidadeMaxima: 324
}

const Volvo = {
    modelo: "V40",
    velocidadeMaxima: 200
}

console.log(ferrari.__proto__) // Object
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(Volvo.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) // null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // function function

console.log(Object.prototype, MeuObjeto.prototype) // {} {}
*/

// Aula 2
// Cadeia de protótipos (prototype chain)

/*
Object.prototype.attr0 = 'Z'

const avo = {attr1: "A"}
const pai = {__proto__: avo, attr2: "B", attr3: "D"}
const filho = {__proto__: pai, attr3: "C"}

console.log(filho.attr1) // A
console.log(filho.attr2) // B
console.log(filho.attr3) // C (filho sobrescreve o pai)

console.log(filho.attr0) // Z

console.log(filho.attr4) // undefined

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status () {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 // Shadowing
}

const volvo = {
    modelo: "V40",
    status () {
        return `${this.modelo}: ${super.status()}`
    },
}

Object.setPrototypeOf(ferrari, carro) // ferrari herda carro
Object.setPrototypeOf(volvo, carro) // volvo herda carro

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
*/

// Aula 3

/*
const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = "Carla"

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key)? 
    console.log(key) : console.log(`Propriedade herdada: ${key}`)
}
*/

// Aula 4

/*
function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// Os objetos criados acima são do mesmo tipo e apontam para o mesmo protótipo
console.log(obj1.__proto__ === obj2.__proto__) // true

console.log(MeuObjeto.prototype === obj1.__proto__) // true

// Qualquer objeto criado a partir de um protótipo, herdará todos os atributos e métodos do protótipo
MeuObjeto.prototype.nome = "Anônimo"

MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar() // Bom dia! Meu nome é Anônimo
obj2.nome = "Rafael"
obj2.falar() // Bom dia! Meu nome é Rafael

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // mudando a referencia de protótipo de "Object.prototype" para "MeuObjeto.prototype"

obj3.nome = "Obj3"
obj3.falar() // Bom dia! Meu nome é Obj3
*/

// Aula 5

/*
console.log(typeof String) // Function
console.log(typeof Array) // Function
console.log(typeof Object) // Function

// As funções possuem um atributo chamado prototype que aponta para o protótipo do objeto e podem ser modificados
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log("Escola Cod3r".reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())
*/

function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula("Bem Vindo", 123)
const aula2 = new Aula("Até Breve", 456)
console.log(aula1, aula2)