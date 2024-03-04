let telefone = '54';
console.log(telefone.padEnd(9, '*')); //1º param.: mínimo de caracteres; 2º param.: Com o que devo complementar?


let cartao_de_credito = '1234123412341234';

let cartao_mascarado = cartao_de_credito.slice(-4).padStart(12, '*');
console.log(`Seu número de cartão de crédito está correto? ${cartao_mascarado}`);
