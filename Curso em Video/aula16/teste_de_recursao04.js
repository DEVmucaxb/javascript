const recursao = function (string = 'Olá mundo', times = 1) {
    if (times < 0) {
        return 'Por favor, digite apenas números positivos';
    } else if (times === 0) {
        return '';
    } else {
        return string + recursao(string, times - 3);
    };
};

console.log(recursao('Brasil ', 4)); //Irá aparecer: Brasil Brasil Por favor, digite apenas números positivos
