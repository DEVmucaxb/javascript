for (let c = 0; c <= 10; c++) {
    console.log(c);
};

console.log();
console.log('Aula20____________________________________');

let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');

/*for (let c = 0; c < cores.length; c++) { console.log(cores[c]) };*/

/*for (let c in cores) { console.log(cores[c]) };*/

for (let cor of cores) { console.log(cor) };



let cores2 = [
    { nome: 'preto', quant: 10 },
    { nome: 'azul', quant: 5 },
    { nome: 'vermelho', quant: 15 }
];

for (let cor of cores2) {
    console.log(`Nome: ${cor.nome} - Quantidade ${cor.quant}`);
};


console.log();
console.log('Aula21____________________________________');

let numero = 0;

while (numero <= 10) {
    console.log(numero);
    numero++;
};

console.log();
console.log('Aula22____________________________________');

// 1. Faça um loop que mostre todas as frutas
let fruits = ['maça', 'uva', 'banana'];
for (fruta of fruits) {
    console.log(fruta);
};

// 2. Conte de 1 até 100 através de um while
let n = 1
while (n <= 100) {
    console.log(n)
    n++;
};