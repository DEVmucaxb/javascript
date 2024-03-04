//desestruturação de objetos
let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    social: {
        facebook: 'b7web',
        instagram: 'bonieky'
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
};

//ao invés de 

/*
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let anosDeVida = pessoa.idade //...etc
*/

//use:
let { nome, sobrenome, idade: anosDeVida, nacionalidade = 'Brazil' } = pessoa;
console.log(nome, anosDeVida, nacionalidade);
