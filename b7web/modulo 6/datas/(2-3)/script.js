const date = new Date();

console.log(`Estamos no ano de ${date.getFullYear()}`); //Ano da maquina
console.log(`Estamos no mês: ${date.getMonth()}`); //Os messes se iniciam em 0 no JS
console.log(date.getDay()); //Dia da semana (0 a 6)
console.log(`Hoje é dia ${date.getDate()}`); //Dia do mês atual
console.log(`Agora são ${date.getHours()}:${date.getMinutes()}`);


//Pesquisar timeStamp Ex.:

data = Date.now();
console.log(data);