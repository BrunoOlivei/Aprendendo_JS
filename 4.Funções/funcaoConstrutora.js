function Carro(velocidadeMaxima = 200, delta = 5) {
    
    // atributo privado
    let velocidadeAtual = 0

    // método público
    // função que aumenta a velocidade atual de 5 em 5 até a velocidade máxima
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    // Reponsável por retornar a velocidade atual
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    } 
}

// Instanciando um novo objeto que não recebe nenhum argumento, utiliza os argumentos padrões
const uno = new Carro
uno.acelerar()
// Retorna a velocidade atual
console.log(uno.getVelocidadeAtual())

// Instanciando um novo objeto que recebe novos argumentos
const ferrari = new Carro(350, 20)
ferrari.acelerar()
// Retorna a velocidade atual
console.log(ferrari.getVelocidadeAtual())