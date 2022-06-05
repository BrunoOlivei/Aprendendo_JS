// AULA 1

// Função factory é uma função que retorna um objeto

// Factory Simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

// AULA 2
function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49)) 

// AULA 3 
// CLASSE vs. FACTORY

// Classe
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }
}

const p1 = new Pessoa('João', 'Silva')
p1.falar()


// Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()


// AULA 4
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    this.falar = function(){
        console.log(`Meu nome é ${nome} ${sobrenome}`)
    }
}

const p3 = new Pessoa('João', 'Silva')
p3.falar()