let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

fruits.push('kiwi'); //Adiciona como último item da array
fruits.pop(); //Remove o último item da array
//fruits.shift(); //Remove o primeiro item da array
fruits[fruits.length - 1] = 'Pêra';

console.log(fruits);
console.log(fruits.length);
console.log(fruits.join(' '));

console.log();
console.log('Aula24______________________________________');

fruits.sort() //Põe em ordem alfabetica
fruits.reverse() //Põe a array em ordem inversa
//fruits.sort((a, b) => a - b); //Põe uma lista númerica em ordem crescente



//A seguir: Algoritmo de ordenação com base no ano.

let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'Bmw', year: 2018 },
    { brand: 'Ferrari', year: 2020 }
];

cars.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    };
});

console.log(cars);

// Ou

cars.sort((a, b) => a.year - b.year);

console.log(cars);
