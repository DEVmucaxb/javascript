//A função JSON.stringify() Transforma o JSON puro no formato sintaxicamente correto; Resumindo: transforma o objeto em string.

let pessoa = { nome: 'Bonieky', idade: 90 };
console.log(pessoa);

//Transforma o objeto pessoa em string pronto para ser enviado em uma requisição. (ex.: servidor)
pessoa = JSON.stringify(pessoa);
console.log(pessoa);

//Transforma o JSON recebido pelo servidor em um objeto JS por exemplo
pessoa = JSON.parse(pessoa);
console.log(pessoa);


//Praticando...
//autocomplete da Google

let digitado = { input: 'bon' };

digitado = JSON.stringify(digitado); //Pronto para ser mandado para o server

let currently_words_used = {
    lista: ['Bonieky', 'Bonieky Lacerda', 'bonito', 'bonanza']
};

currently_words_used = JSON.stringify(currently_words_used); //Pronto para ser mandado para o client

currently_words_used = JSON.parse(currently_words_used); //Retransformar o JSON do server em objeto JS para ser lido pelo client


//Resumo:

//  JSON.parse() Pega uma string recebida e transforma em objeto JS
//  JSON.stringigy() Pega o objeto JS e transforma em string para ser enviada
