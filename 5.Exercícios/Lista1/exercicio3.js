/*
* 3 - Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

const potencia = (base, expoente) => {
    console.log(Math.pow(base, expoente))
}

const potencia2 = (base, expoente) => console.log(Math.pow(base, expoente))

const potencia3 = function(base, expoente){
    console.log(Math.pow(base, expoente))
}

potencia(2, 2)
potencia(2, 3)
potencia2(2, 2)
potencia2(2, 3)
potencia3(2, 2)
potencia3(2, 3)