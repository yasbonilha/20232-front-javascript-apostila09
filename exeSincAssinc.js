// computação síncrona (bloqueante) e assíncrona (não bloqueante)

// exemplo bloqueante
    // function demorada(){
    //     // extrair a data atual do sistemae deslocar 2s
    //     const dataAtualMais2Segundos = new Date().getTime() + 2000
    //     // ficar extraindo a data atual do sistema até que ela tenha passado da original
    //     while (new Date.getTime() <= dataAtualMais2Segundos){

    //     }
    //     const d = 8 + 4
    //     return d
    // }

    // const a = 2 + 3
    // const b = 5 + 9
    // const d = demorada()
    // const e = 2 + a + b
    // // a linha 20 precisa do valor da 17 e 18 - não precisa da 19, e a 19 demora muito


// exemplo não bloqueante
    // function demorada(){
    //     // extrair a data atual do sistemae deslocar 2s
    //     const dataAtualMais2Segundos = new Date().getTime() + 2000
    //     // ficar extraindo a data atual do sistema até que ela tenha passado da original
    //     while (new Date.getTime() <= dataAtualMais2Segundos){

    //     }
    //     const d = 8 + 4
    //     return d
    // }

    // const a = 2 + 3
    // const b = 5 + 9
    // setTimeout(() => {
    //     const d = demorada()
    //     console.log('d: ' + d)
    // }, 500)
    // // a função demorada vai ser executada pelo menos 500ms depois. enquanto isso, o fluxo principal continua seguindo, criando um processamento assíncrono (espécie de processamento paralelo)
    // const e = 2 + a + b

// setTimeout(() => {console.log('dentro da setTimeout')}, 0)
// console.log('depois de setTimeout')
// // mesmo a função tendo que esperar 0ms para poder ser executada, a função setimeout faz com que a função seja posta para o "final" da fila, e o fluxo principal é executado primeiro

// function demorada(tempo){
//     console.log(`demorada: ${tempo}`)
//     const atualMaisTempo = new Date.getTime() + tempo
//     while(new Date.getTime() <= atualMaisTempo) {

//     }
//     const d = 8 + 4
//     return d
// }

// setTimeout(() => {demorada(2000)}, 2000)
// setTimeout(() => {demorada(1000)}, 1000)

// console.log('fim do script principal')

// o console log aparece primeiro, depois o setTimeout com 1000, e só depois o setTimeout 2000 - porque ela estava programada para rodar dó depois de 2s. primeiro o código todo é executado, então as funções que estão sendo deixadas para depois vão ficando para o fim da fila

// console.log(1)
// setTimeout(() => {console.log(2)},0)

// const atualMaisTempo2 = new Date().getTime() + 1500
// while(new Date.getTime() <= atualMaisTempo2);
// console.log(3)

// operações IO-BOUND - manipular dados em meio externo (input e output) - gerenciadas pelo node e executam em paralelo
// operaçoes que fizemos até agora - CPU-BOUND - computação na própria CPU
// módulo fs - file system



// inferno de callbacks
// código hadouken


const fs = require('fs')
// permite que a gente leia um conteúdo do disco
// definir uma função que lê o arquivo
const abrirArquivo = function(nomeArquivo){
    // 1. definir uma função que será chamada quando a leitura do arquivo terminar
    // essa é uma função callback - antes de iniciar essa função, o fs vai ser instruído a ler o arquivo. nós definimos a função mas nunca chamamos. ela é chamada automaricamente pelo ambiente, quando algo de interesse (um evento) acontece automaticamente
    const exibirConteudo = function(erro, conteudo){
        // undefined tem valor lógico de False, logo, não precisamos fazer comparações
        if(erro){
            console.log('deu erro:' + erro)
        }else{
            console.log(`conteúdo lido: ${conteudo.toString()}`)
            dobro = Number(conteudo.toString()) * 2
            const finalizar = function(erro){
            console.log(`${erro? 'deu erro ao salvar o dobro' : 'salvou o dobro com sucesso'}`)
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
        }
    }
    // 2. usado o módulo fs para iniciar a leitura do arquivo
    fs.readFile(nomeArquivo, exibirConteudo)
}

// chamar essa função, entregando a ela o nome do arquivo que ela deve abrir
abrirArquivo("arquivo.txt")
