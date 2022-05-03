const prod1 = {} // Cria um objeto vazio
prod1.nome = "Celular Ultra Mega" // Adiciona um novo atributo e valor ao objeto.
prod1.preco = 4998.90 // Adiciona um novo atributo e valor ao objeto.

console.log(prod1)

prod1['Desconto Legal'] = 0.40 // Adiciona um novo atributo e valor ao objeto // evitar atributos com espaços.
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

// Dentro de um objeto podemos criar outros objetos contendo mesmo nome para atributos, exemplo (preco, desconto, etc).
const prod3 = {
    nome: 'Bermuda água',
    preco: 89.90,
    descricao: {
        cor: 'azul',
        tamanho: 'G',
        preco: 50.00
    }
}

console.log(prod3)