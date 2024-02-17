function repetirString(string = 'Olá mundo', vezes = 1) {
    if (vezes < 0) {
        return 'Use números positivos, por favor';
    } else if (vezes === 0) {
        return '';
    } else {
        return string + repetirString(string, vezes - 1);
    };
};

console.log(repetirString('Brasil ', 10));
