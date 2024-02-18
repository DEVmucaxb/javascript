let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra'];

//Usando .filter()
/*let frutas_maiores_4letras = fruits.filter((itens) => {
    if (itens.length > 4) {
        return true; //Pega o item
    } else {
        return false; //Não pega o item
    };
});*/

let frutas_maiores_4letras = fruits.filter((value) => {
    return value.length > 4;
});

console.log(frutas_maiores_4letras);


//Usando .every()
let res = fruits.every((value) => {
    return value.length > 3;
});

if (res) {
    console.log('Todos os itens são maiores que 3 letras');
} else {
    console.log('Nem todos os itens são maiores que 3 letras');
};


//Usando .some()
let um_ou_mais_itens_maior_que3 = fruits.some((value) => {
    return value.length > 3;
});

if (um_ou_mais_itens_maior_que3 && fruits.length != 0) {
    console.log('Um ou mais itens são maires que 3 letras!');
} else if (fruits.length === 0) {
    console.log('Lista Vazia');
} else {
    console.log('Nenhum item da lista é maior que 3 letras!');
};
//OBS: Caso a array esteja vazia, o método .every retorna true
