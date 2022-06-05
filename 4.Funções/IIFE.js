// IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION

// Padrão muito utilizado para fugir do escopo global

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()