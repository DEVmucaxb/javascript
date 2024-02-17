let valores = [8, 1, 7, 4, 2, 9];

// console.log(valores);
/*
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]);
console.log(valores[4]);
console.log(valores[5]);
console.log(valores[6]);
*/

for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`);
};

console.log('_______________________________');

for (let pos in valores) { //Essa sintaxe somente funciona para arrays e objetos.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);

}


console.log('_______________________________');
console.log('Usando .indexOf()')
console.log()

console.log(valores.indexOf(8)); //Busca a posição do valor solicitado na array. Ex.:
if (valores.indexOf(8) === -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O número 8 está na posição ${valores.indexOf(8)} da lista`);
}