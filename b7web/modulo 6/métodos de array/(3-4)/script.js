let lista = [45, 4, 9, 16, 25];


//O método map percorre a array e executa uma função para cada um dos itens da mesma. Ex.:
let listaDobro = lista.map((actual_item) => { return actual_item * 2 });
console.log(listaDobro);


//O método filter, adiciona o item percorrido, caso o mesmo satisfaça a condição. Ex.:
let listaMenor20 = lista.filter((item) => { if (item < 20) { return true } });
console.log(`Números menores que 20: ${listaMenor20}`);


//O método .every() não gera uma nova array. Retorna true or false. Ex.:
let soPares = lista.every((item) => (item % 2) === 0);
console.log(`Só tem pares? ${soPares}`);

//O método .some() retorna true caso ao menos 1 item da array satisfaça a condição
let algumImpar = lista.some((item) => (item % 2) === 1);
console.log(`Algum ímpar? ${algumImpar}`);
