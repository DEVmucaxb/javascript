let n = 5;

console.log(`${typeof (n.toString())}`); //Transforma em string

console.log(`R$ ${n.toFixed(2)}`); //Exibi a quantidade de casas decimais desejadas

//String para número
console.log(parseInt(n) + parseFloat(n)); //Resultado 10