let num = [5, 8, 2, 9, 3];
num[5] = 6; //Substitui o elemento da posição 5 ou o adiciona caso não exista (que é o nosso caso)
num.push(7); //Adiciona o 7 no final da array
num.push(1); //Adiciona o 1 no final da array que nesse caso termina em 7
num.length; //Lê o comprimento da array

console.log(`nosso vetor é o ${num} e possui o comprimento de ${num.length} elementos`);

num.sort();
console.log(`nosso vetor ordenado é ${num}`);
