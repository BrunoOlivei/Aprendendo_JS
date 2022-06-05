/*
* 7 - Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
* elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
* parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
* -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
* que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
* “Delta é negativo”.
*/

function Bhaskara(a, b, c){
    delta = Math.pow(b, 2) - (4 * a * c)
    if (delta > 0){
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)
        return "O valor de delta é " + delta + " valor de x¹ é " + x1 + " e o valor de x² é " + x2
    }
    else if (delta == 0) {
        x = (-b + Math.sqrt(delta)) / (2 * 0)
        return "O valor de delta é " + delta + " o valor de x é " + x
    }
    else {
        return "O valor de delta é " + delta + " portanto a equação não possui resultados reais"
    }

}

console.log(Bhaskara(1, 12, -13))
console.log(Bhaskara(2, -16, -18))
console.log(Bhaskara(1, 3, 2))
console.log(Bhaskara(3, 1, 2))