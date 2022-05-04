// TRATAMENTO DE ERRO

function tratarErroELancar(erro){
    //throw new Error('...')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimeNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto'}
imprimeNomeGritado(obj)

const obj2 = { nome: 'Roberto'}
imprimeNomeGritado(obj2)