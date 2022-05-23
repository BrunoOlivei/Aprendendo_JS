// AULA 1

// No exemplo abaixo o this é usado para referenciar um objeto dentro do escopo do objeto pessoa
const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao) // Sem o this o código gerará um erro (saudacao is not defined)
    }
}

pessoa.falar()

const falar = pessoa.falar // atribuindo a função falar a uma constante

falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// AULA 2

function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa

function Pessoa() {
    this.idade = 0

    const self = this // constante que recebe o this e dessa forma não se altera
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa