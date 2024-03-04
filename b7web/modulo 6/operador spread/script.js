let numeros = [1, 2, 3, 4];
let outros = [...numeros, 5, 6, 7, 8];

//Ex2.:
let info = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 99
};

let novasInfo = {
    ...info,
    cidade: 'Campina Grande',
    estado: 'Paraiba',
    pais: 'Brasil'
};

console.log(novasInfo.cidade);




//Praticando...
function adicionar_dados(dados) {
    let dados_cliente = {
        ...dados,
        status: 0,
        token: 'fdgblabla',
        dataCadastro: 2018
    };
    return dados_cliente;
};

console.log(adicionar_dados(info));
