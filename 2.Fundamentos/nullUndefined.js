let valor // não inicializada nao aponta para nenhum objeto da memoria
console.log(valor) // undefined

valor = null // ausência de valor, foi iniciada mas não tem nenhum valor
console.log(valor) // null

const produto = {}
console.log(produto) // {}

console.log(produto.preco) // undefined

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco) // false

// delete produto.preco // deleta o atributo preco

console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) // false
console.log(produto)