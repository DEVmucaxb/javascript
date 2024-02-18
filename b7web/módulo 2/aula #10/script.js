/*function somar(x, y) {
    return x + y;
};*/

/*const somar = (x = 0, y = 0) => {
    return x + y;
};*/

const somar = (x = 0, y = 0) => x + y //não coloca-se colchetes e nem return nesse caso (OBS: Funciona apenas pq a função possui apenas uma linha de execução)
console.log(somar(10, 5));



/*function sobrenome(sob) {
    return 'Bonieky ' + sob;
};

sobrenome = sob => 'Bonieky ' + sob;

sobrenome = (sob) => 'Bonieky ' + sob;

sobrenome = (sob) => {
    return 'Bonieky ' + sob;
};

const sobrenome = (sob) => {
    let nome_completo = 'Bonieky ' + sob;
    return nome_completo;
};

console.log(sobrenome('Lacerda'));
*/