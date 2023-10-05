
// // dinamicamente tipada:
// // let, const e var
// // const não pode mudar depois da declaração
// const nome = 'jpsé da silva'

// // as variáveis do js não tem tipo - o que tem tipo é a informação contida neles e que é referenciada pela variável
// console.log(typeof(nome))

// const idade = 18
// console.log(idade, typeof(idade))
// let
let a = 2
let endereco = 'rua b'

// diferença entre let e const é que você pode atribuir outros valores a let depois que você a declara
// o const existe pelo conceito do menor privilégio - se a variável não precisa do privilégio de reatribuição, então não damos esse privilégio para ela
// var (sabe que existe, mas nunca vai usar - elemento antigo que ainda está no js por retrocompatibilidade)

// js é baseada num padrão ECMAScript - especificação do js
var linguagem = 'js'
console.log('aprendendo' + linguagem)

var idade = 18
console.log('oi', nome)
if (idade>=18){
    var nome = 'joão' //hoist - içamento
    console.log('sim', + nome+ ", você pode dirigir")
}
console.log('até mais', + nome)

// o escopo de var é global, mas somente sua declaração é içada pela dupla passagem no js
// duas passagens no js - declaração e ordem de execução, sendo que na primeira não há atribuição, só declaração
// no let, o escopo é restrito a bloco - sem efeito içamento

// interpolação - delimitação de string com crases que dá a opção de utilização de interpolação - avaliação de uma expressão

// funções são objetos - elas são cidadãs de primeira classe

// == ocorre coerção implícita
// === não ocorre coerção - comparação po tipo

console.log(1===3) //sempre usamos o comparador triplo para não ocorrer uma coerção implícita, daí não ocorre o erro de, por exemplo, o int 1 ser considerado iguado a true, ou, de uma lista vazia é igual a um false

// loose equality - varia de ambiente, navegador, etc (não podemos falar com precisão)

// coleções, vetores e listas - parecido com a lista do python ou com a arraylist do java

// métodos utilitários sobre vetores

// jeito antigo mas ainda utilizado para definir funções em js (ele é da fase obscura mas conseguiu se safar antes do apocalipse)

function hello() {
    console.log('oi')

}

hello()

function hello(nome){
    console.log(`oi, ${nome}`)
}

// não existe sobrecarga no javascript, também pela dupla passagem do javascript - acontece uma redefinição - e, mesmo se você não passar nada como parâmetro, a função entende que você está passando o valor undefined
function soma(a,b){
    console.log(a + b)

}
// quando temos uma função sem return ela devolve undefined.

// podemos definir uma função sem nome e atribui-las a ma variável - não o resultado de uma função, a própria função
const dobro = function(n){
    return n * 2
}

// o valor padrão de uma função js é undefined. porém, podemos trocar esse valor padrão para outro valor de nossa preferência

const dobro1 = function(n=5){
    return n * 2
}

// arrow functions podem não ter return se não tiverem colchetes, e não tem colchetes se só tiverem uma instrução
// se você coloca chaves, o return não está implícito. então, se chamarmos uma função que tem chave e não tem return, o resultado vai ser undefined
// podemos passar um parâmetro sem parênteses quando temos só um parâmetro
// function sempre tem return e chaves - independentemente da quantidade de parâmetros
// quando a lista de parâmetros é vazia, temos que colocar os parênteses vazios
// console.log() imprime um valor no terminal mas não retorna nada. logo, se o return é um console.log(), o resultado retornado é undefined.


// métodos utilitários de vetores

const nomes= ['ana', 'maria', 'rodrigo', 'amelie']

const aux = []

for (let i = 0; i < nomes.length; i++){
    if (nomes[i].startsWith('a'))
        aux.push(nomes[i])
}
console.log(aux)

// como aux é uma constante, não podemos alterar sua "essencia", mas podemos alterar a estrutura que lhe foi designada (podemos aumentar o tamanho de uma lista, por exemplo)
// esse método é um método imperativo - nós dizemos exatamente o que queremos fazer

const aux1 = nomes.filter((nome) => nome.startsWith('a'))
console.log(aux1)

// método declarativo com função predicado - o nome da arrow function é como o nomes[i] do método imperativo

const numeros = [1, 2, 3]
const resultados = []

for (let i= 0; i<numeros.length; i++) {
    resultados.push(numeros[i]*numeros[i])
}
console.log(resultados)

function mapear(lista, funcao){
    const listaReturn = []
    for(let i=0; i<lista.length; i++){
        listaReturn.push(funcao(lista[i]))
    }
    return listaReturn
}

tres = [1,2,3]
tOrF = mapear(tres, x=> x % 3 === 0? `sim, ${x} é múltiplo` : `não, ${x} não é múltiplo`)
console.log(tOrF)

// a função map já existe - uma função de instância

console.log(numeros.map(n=> n%3 === 0? 'sim' : 'não'))

// funções que recebem ou devolvem funçoes são funções de mais alta ordem

