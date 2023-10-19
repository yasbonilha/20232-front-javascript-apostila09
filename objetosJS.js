// objetos javascript (ou 'JSON' javascript object notation)

let pessoa = {
    nome : 'João',
    idade: 17
}
// somente as chaves já se configuram como um objeto json válido

// operadores de acesso a membro - ponto ou colchetes
console.log('o nome da pessoa é ' + pessoa.nome)
console.log('o nome da pessoa é ' + pessoa['nome'])

// uma pessoa se chama maria, tem 21 anos e mora na rua B, 121

let pessoa2 = {
    nome: 'Maria',
    idade: 21,
    endereco: {
        rua: 'Rua B',
        numero: 121
    }
    // a chave endereço esteha associado a um valor só, só que, por acaso, esse valor é um objeto que contém mais dois valores
}

console.log(pessoa2.endereco.numero)
console.log(pessoa2['endereco']['numero'])

// *********************************

// uma concessionária tem objeto e endereço (rua, número, bairro). ela possui 3 carros em estoque. cada um deles tem marca, modelo, e ano de fabricação

let concessionaria = {
    cnpj: '12.345.789/0001-67',
    endereco: {
        rua: "rua joaquim",
        numero: 1234
    },
    estoque: [
        {marca: 'fiat', modelo: 'uno', ano: 2014},
        {marca: 'marca da maria', modelo: 'maria', ano:2020},
        {marca: 'marca da dani', modelo: 'dani', ano:2016}
    ]
    }

    console.log(concessionaria.estoque[0].ano.modelo)

    // estrutura de repetição para mostrar todas as marcas e modelos for/of
    for (let veiculo of concessionaria.estoque){
        console.log(`modelo: ${veiculo.modelo}`)
    }

// uma calculadora (objeto) realiza: soma de dois números (arrow function com return), raiz quadrada de um número (function regular), subtração de dois números (arrow function sem return)

calculadora = {
    soma: (numero1, numero2) => {return numero1 + numero2},
    subtracao: (a, b) => a-b,
    raiz: function(a){return Math.sqrt(a)}
}

console.log(calculadora.soma(2,3))
// mostre como somar sem o operador ponto
console.log(calculadora['soma'](2,3)) 
// a propriedade soma é um objeto callable - logo, podemos colocar os parênteses logo depois de chamar a propriedade