/*
* 6 - Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
* primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
* retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalInicial, taxaJuros, tempo) {
    return capitalInicial * (taxaJuros / 100) * tempo
}

function jurosCompostos(capitalInicial, taxaJuros, tempo){
    return capitalInicial * Math.pow((1 + (taxaJuros / 100)), tempo)
}


console.log(jurosSimples(10000, 5.5, 36))
console.log(jurosCompostos(10000, 5.5, 36))