//desestruturação de objetos
let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    social: {
        facebook: 'b7web',
        instagram: {
            url: '@bonieky',
            seguidores: 1000
        }
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
};

//ao invés de 

/*
let { facebook, instagram } = pessoa.social;
console.log(facebook, instagram);
*/

//use:

let { nome, idade, social: { instagram: { url: instagram, seguidores } } } = pessoa;
console.log(`${nome} tem ${idade} anos, seu ig é ${instagram} o qual possui ${seguidores} seguidores`);




//Praticando...
function pegarNomeCompleto({ nome, sobrenome = 'Silva', social: { instagram: { url: instagram, seguidores } } }) {
    return `${nome} ${sobrenome} (siga em ${instagram}, ele tem ${seguidores} seguidores)`;
};
console.log(pegarNomeCompleto(pessoa));
