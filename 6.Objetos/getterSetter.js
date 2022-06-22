const sequencia = {
    _valor: 1, // Convenção para atributo privado, porém esse atributo não fica efetivamente privado, é apenas uma convenção para não chamar o valor diretamente
    get valor() { // getter é uma função que retorna o valor do atributo
        return this._valor++
    },
    set valor(valor) { // setter é uma função que recebe o valor do atributo
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // acessa o valor do atributo
sequencia.valor = 1000
console.log(sequencia._valor) 
sequencia.valor = 900
console.log(sequencia._valor)
