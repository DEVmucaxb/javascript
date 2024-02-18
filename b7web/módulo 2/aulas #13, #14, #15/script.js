let colors = ['blue', 'red', 'green'];
console.log(colors[0]);

let nomes = ['Bonieky', 'Pedro', 'Silvia', 'Priscila'];
let lista = ['algo', nomes, 30, 'blabla', true];
console.log(lista[1][2]);


let lista2 = ['blabla', ['yy', 'zz', 'kk']];
console.log(lista2[1][2]);


console.log();
console.log('aula14__________________________________________');

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];

ingredientes.push('cebola'); //adiciona como ultimo item da array
ingredientes.pop(); //remove o último item da array
// ingredientes.shift(); //remove o primeiro item da array
console.log(`${ingredientes} Total de ingredientes ${ingredientes.length}`);

console.log();
console.log('aula15__________________________________________');

// 1. Na array abaixo, qual o número que pega a Ferrari.
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log(`1. ${carros[x]}`);

// 2. Troque a Ferrari por Audi.
carros[1] = 'Audi';
console.log(`2. Lista com Audi: ${carros}`);

// 3. Adicione o Volvo a lista.
carros.push('Volvo');
console.log(`2. Lista com Volvo: ${carros}`);

// 4. Exiba quantos itens tem na array
console.log(`4. itens na array ${carros.length}`);
