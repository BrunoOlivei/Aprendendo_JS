const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna o caracter na posição 4
console.log(escola.charAt(5)) // retorna o caracter na posição 5 se não existe retorna vazio.

console.log(escola.charCodeAt(3)) // retorna o código do caracter na posição 4
console.log(escola.indexOf('3')) // retorna a posição do caracter na string

// substring(inicio, fim) -> retorna uma substring da string parecido com o slice do Python [inicio:fim]
console.log(escola.substring(2)) // retorna a string a partir da posição 2
console.log(escola.substring(0, 3)) // retorna a string a partir da posição 0 até a posição 3

// concat(string) -> junta duas strings
console.log('Escola '.concat(escola).concat("!")) // concatena duas strings
console.log('Escola ' + escola + "!") // concatena duas strings

// replace(caracter, novoCaracter) -> substitui o caracter pelo novo caracter
console.log(escola.replace(3, 'e')) // substitui o caracter na posição 3 pelo caracter 'e'
console.log(escola.replace(/\d/, 'e')) // substitui todos os números pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) // substitui todos os caracteres pela letra 'e' (g = global)

// split(separador) -> retorna um array com a string separada pelo separador (',', ' ', ';', '\n')
console.log('Ana,Maria,Pedro'.split(',')) // retorna um array com os elementos separados por ','
console.log('Ana,Maria,Pedro'.split(/,/)) // retorna um array com os elementos separados por ',' utilizando regex
