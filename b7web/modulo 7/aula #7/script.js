function pegarTemperatura() {
    return new Promise(function (resolve, reject) {
        console.log('Pegando Temperatura...');

        setTimeout(function () {
            resolve('40 na Sombra');
        }, 2000);
    });
};

//Usando a promisse

let temp = pegarTemperatura();
console.log(temp);

temp.then(function (resultado) {
    console.log(`Temperatura de ${resultado}`);
});

temp.catch(function (error) {
    console.log(`[ERRO] Falha na obtenção da temperatura. Código de erro: ${error}`);
});
