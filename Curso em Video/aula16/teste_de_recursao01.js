function repetirString(texto = 'Olá mundo', numeroVezes = 1) {
    let resultado;
    while (numeroVezes >= 1) {
        resultado += texto + `[${numeroVezes}] `;
        numeroVezes--;
    };
    return resultado;
};

console.log(repetirString('Olá pessoas', 9));
