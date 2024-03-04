//Basicamente, o operador Rest, prepara as funções para receber uma quantidade de parâmetros desconhecida

function somador(...numeros) {
    let somaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
        somaTotal += numeros[i];
    };
    return somaTotal;
};

console.log(somador(7, 7, 7));


//Praticando...
let nomes = ['Bonieky', 'Paulo'];

function adicionar(nomes, ...novosNomes) {
    let novoConjunto = [...nomes, ...novosNomes];
    return novoConjunto;
};

console.log(adicionar(nomes, 'Antônio', 'Maria', 'Leo'));
