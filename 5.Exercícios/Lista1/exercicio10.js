/*
* 10 - Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
* ou false.
*/

function divisivelPorTres(numero) {
    if (numero % 3 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
divisivelPorTres(3)
divisivelPorTres(6)
divisivelPorTres(5)
divisivelPorTres(7)
