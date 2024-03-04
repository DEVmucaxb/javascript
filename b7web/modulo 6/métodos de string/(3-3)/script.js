let nome = 'Bonieky Lacerda Leal';

//Método Replace
console.log(nome.replace('Lacerda', 'pastel')) //1º param. fatia a ser substítuida; 2º param. novo valor.

console.log(nome.toUpperCase()); //Tudo em Maiuscula
console.log(nome.toLowerCase()); //Tudo em Minuscúla

console.log(nome.trim()); //Não possui param.; remove TODOS os espaços excesivos

console.log(nome.charAt(3)); //Diz a letra presente na posiçao do param.
console.log(nome[3]); //Faz o mesmo que o método .charAt()

let resultado = nome.split(' '); //Gera uma array, fatiando a frase de acordo com o que foi passado no param.
