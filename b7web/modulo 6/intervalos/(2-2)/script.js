const contagem_regressiva = setTimeout(() => {
    alert('Olá... depois de 3 segundos');
}, 3000);

//Como parar a contagem:
clearTimeout(contagem_regressiva);
