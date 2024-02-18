let nome = 'Bonieky';
let nomes = ['Bonieky', 'pedro'];
let personagem = {
    nome: 'Bonieky',
    idade: 90,
    nacao: 'Brasil',
    cor_olhos: ['preto', 'azul'],
    atributos_personagem: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
};

console.log(`o player ${personagem.nome} tem ${personagem.idade} anos com ${personagem.atributos_personagem.forca} de força e, olho direito da cor ${personagem.cor_olhos[1]}.`);

personagem.nome = 'Pedro';
personagem.atributos_personagem.forca++;
personagem.cor_olhos.push('verde'); //Personagem ganhou um terceiro olho


console.log();
console.log('Aula17_________________________________________________');


let personagem2 = {
    nome: 'Bonieky',
    idade: 20,
    carros: [
        { modelo: 'Fiat', color: 'preto' },
        { modelo: 'Ferrari', color: 'vermelho' }
    ]
};

console.log(`O personagem ${personagem2.nome} possui uma ${personagem2.carros[1].modelo}`);


console.log();
console.log('Aula18_________________________________________________');

let pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Saverin',
    idade: 90,
    nome_completo: function () {
        return this.nome + ' ' + this.sobrenome;
    }
};

console.log(pessoa.nome + ' ' + pessoa.sobrenome);
console.log(pessoa.nome_completo());
