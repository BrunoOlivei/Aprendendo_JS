// AULA 1
const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec(); // Global

// AULA 2

// Clojure: é o escopo criado quando uma função é declarada.
// Esse escopo permite a função acessar e manipular variáveis externas à função 

const x = "Global";

function fora() {
    const x = "Local";
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao()); // Local
