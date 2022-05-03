const valores = [7.7, 8.9, 6.3, 9.2] // array com valores.
console.log(valores[0], valores[3]) // retorna os valores do array de acordo com a posição.
console.log(valores[4]) // retorna undefined, pois não existe um valor na posição 4.

valores[4] = 10 // adiciona um valor na posição 4.

console.log(valores)
console.log(valores.length) // retorna o tamanho do array.

valores.push({id: 3}, false, null, 'teste') // adiciona um novo valor no array.
console.log(valores)

console.log(valores.pop()) // retorna o último valor do array e remove o último valor do array.

delete valores[0] // deleta o valor da posição 0.
console.log(valores)

console.log(typeof valores) // retorna o tipo do array.