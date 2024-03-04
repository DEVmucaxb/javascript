let lista = ['Ovo', 'farinha', 'leite', 'chocolate'];

console.log(lista.toString()); //Exibi a lista em forma de frase, separada por vírgulas

console.log(lista.join('-')); //Idêntico ao .toString(); porém separando-a pelo que foi passado no parâmetro

console.log(lista.indexOf('Ovo'));



//Os Métodos a seguir mudam o valor da array ao serem utilizados

lista.pop(); //Remove o último item da array
lista.shift(); //Remove o primeiro item da array
lista.push('baunilha'); //Adiciona um novo item ao final da array

lista[lista.length] = 'Farinha'; //Muda o item do indice ou adiciona um novo caso já não exista

console.log(lista);