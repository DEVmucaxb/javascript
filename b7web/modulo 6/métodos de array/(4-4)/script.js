let lista = [
    { id: 1, nome: 'Bonieky', sobrenome: 'Lacerda' },
    { id: 2, nome: 'Gustavo', sobrenome: 'Pereira' },
    { id: 3, nome: 'Josevaldo', sobrenome: 'Santos' }
];

let pessoa = lista.find((item) => (item.sobrenome === 'Santos') ? true : false); //Não retorna o índice, mas sim a propriedade
console.log(pessoa);

let pessoa2 = lista.findIndex((item) => (item.sobrenome === 'Lacerda') ? true : false); //Como o nome sugere, retorna o índice
console.log(pessoa2);
