//aula1 O que é uma função

//aula#2____________________________________________________
console.log('aula2___________________________________________________');

function gravidade() {
    console.log('A gravidade do planeta é');
    console.log(9.81);
};

console.log();
//aula#3____________________________________________________
console.log('aula3___________________________________________________');

console.log('Olá tudo bem? ');
gravidade();

console.log();
//aula#4____________________________________________________
console.log('aula4___________________________________________________');

function somar(n1 = 0, n2 = 0) {
    let resultado = n1 + n2;
    console.log(`Resultado: ` + resultado);
};

somar(10, 15);

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
};

nomeCompleto('Samuel', 'Felipe');

console.log();
//aula5____________________________________________________
console.log('aula5___________________________________________________');

// Entrada -> Processamento -> Saída
function nomeCompleto2(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
    console.log(`${nome} ${sobrenome}`);
};

let completo = nomeCompleto2('Bonieky', 'Lacerda'); //professor da b7web
console.log('Completo ' + completo);

console.log()
//aula6___________________________________________________
console.log('aula6___________________________________________________');

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    };
};

let idade = 48;
let verificacao = maiorDeIdade(idade);

if (verificacao === true) {
    console.log(`Quem possui ${idade} anos é Maior de idade`);
} else {
    console.log(`Quem possui ${idade} anos Menor de idade`);
};

console.log();
//aula7___________________________________________________
console.log('aula7___________________________________________________');

//calcular porcentagem
let valor = 40;
let porcentagem = 25;

const calc_porc = function (valor, porcentagem) {
    return console.log(`${porcentagem}% de ${valor} é ${(valor / 100) * porcentagem}`);
};

calc_porc(valor, porcentagem);

console.log();
//aula8___________________________________________________
console.log('aula8___________________________________________________');

/* Calcule o preço do imovel
m2 = 3.000
Se tiver 1 quarto, o m2 é 1x
Se tiver 2 quartos, o m2 é 1.2x
Se tiver 3 quartos, o m2 é 1.5x */

let metros = 123;
let quartos = 1;
let preco_imovel

const preco = function (metros, quartos = 1) {
    switch (quartos) {
        case 1:
        default:
            preco_imovel = metros * 3000;
            break;
        case 2:
            preco_imovel = metros * 3000 * 1.2;
            break;
        case 3:
            preco_imovel = metros * 3000 * 1.5;
            break;
    }
};

preco(metros, quartos)
console.log(preco_imovel);

console.log();
//aula9___________________________________________________
console.log('aula9___________________________________________________');

/* Crie uma função que valide usuário e senha.
Usuário correto: Pedro
senha correta: 123 */

let usuario = 'Fulano'; //input:text na HTML
let senha = 475; //input:password na HTML

const validador = function (user, pass) {
    if (user === 'Pedro' && pass === 123) {
        return true;
    } else {
        return false;
    };
};

const validacao = validador(usuario, senha);

if (validacao === true) {
    console.log('Acesso Concedido');
} else if (validacao === false) {
    console.log('Acesso Negado');
};
