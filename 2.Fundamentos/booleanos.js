let isAtivo = false

console.log(isAtivo)
console.log(typeof isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! é o operador de negação, ele transforma o valor em boolean.
console.log(!isAtivo) // o operador de negação retorna o valor contrário.

// OS VERDADEIROS
console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// OS FALSOS
console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) // retorna o primeiro valor verdadeiro.

let nome = ""
console.log(nome || 'Desconhecido') // retorna o valor da variável ou o valor padrão.

nome = "Lucas"
console.log(nome || 'Desconhecido')