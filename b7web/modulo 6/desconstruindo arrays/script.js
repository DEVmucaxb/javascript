let info = ['Bonieky Lacerda', 'Bonieky', 'Lacerda', '@bonieky'];

//A desestrução de arrays é feita na ordem que a array foi criada
let [nomeCompleto, , , instagram] = info;
console.log(nomeCompleto, instagram);


//Raramente vai usar, mas melhor aprender:
let [nome, sobrenome, idade = 90, nacionalidade = 'Brasil'] = ['Bonieky', 'Lacerda', 17];
console.log(nome, sobrenome, idade, nacionalidade);


//Praticando...
function criar() { return [1, 2, 3] };
let [a, b, c] = criar();
console.log(a, b, c);
