//aula2

//O que é JSON? Ex.:

let pessoa1 = { nome: 'Bonieky', idade: 90, estetica: { altura: 900, peso: 10 } };



//aula3

//JSON Semânticamente correto e JSON.parse()

let pessoa2 = JSON.parse('{"nome": "Bonieky", "idade": 90}');
console.log(pessoa2.nome);
