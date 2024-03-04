let pessoa = {
    nome: 'Bonieky',
    sobreNome: 'Lacerda',
    idade: 90
};

console.log(Object.keys(pessoa)); //Retorna a chave de cada uma das propriedades do objeto pessoa

console.log(Object.values(pessoa)); //Retorna o valor de cada uma das propriedades

console.log(Object.entries(pessoa)); //Retorna uma array em cada item; o 1º valor da array gerada será a antiga key; o 2º valor da array gerada será o antigo valor que antes era acessado pelo nome da propriedade