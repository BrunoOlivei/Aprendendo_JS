// AULA 1

const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    } else {
        console.log('Reprovado com ' + nota);
    }
}

imprimirResultado(10); // Aprovado com 10
imprimirResultado(4.9); // Reprovado com 4.9

// AULA 2 IF/ELSE IF

Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimirResultado2 = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Nota inválida');
    }
}

imprimirResultado2(10); // Quadro de Honra
imprimirResultado2(8.9); // Aprovado
imprimirResultado2(6.9); // Recuperação
imprimirResultado2(2.9); // Reprovado
imprimirResultado2(-1); // Nota inválida
imprimirResultado2(11); // Nota inválida

