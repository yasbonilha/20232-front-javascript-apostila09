// promises:

function calculoDemorado(numero){
    // executar em tempo linear em n. O(n)
    const p = new Promise(function(resolve, reject){
        // promise é um objeto que você identifica e que vai ficar responsável por uma função potencialmente demorada
        let res = 0
        for (let i=1; i<= numero; i++) res += i
        
        resolve(res)
    })
    return p
}

// const resultado = calculoDemorado(10)
// console.log(resultado)
// console.log('outras coisas')

const promessa = calculoDemorado(10)
// faça o cálculo demorado e então (deixar a função regitrada para execução no futuro)
// quando chamamos a função resolve, estamos chamando a própria função que passamos como parâmetro no then
promessa.then((valor) => {console.log(`valo calculado: ${valor}`)})
console.log( 'outras coisas')
// o fluxo principal continua enquanto a promise é gerada - e ela é calculada depois.