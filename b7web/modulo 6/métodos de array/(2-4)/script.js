let lista = ['Ovo', 'farinha', 'leite', 'chocolate'];

//Remover um item da array
lista.splice(1, 1); //1º param.: a partir de qual índice; 2º param.: quantos itens. (nesse caso a farinha).


//Concatenar 2 listas
let lista2 = ['prato', 'liquidificador', 'forno'];
let listas_unidas = lista.concat(lista2);
console.log(listas_unidas);


lista.sort(); //Ordena a array em ordem alfabética.
lista.reverse(); //Inverte a array.
