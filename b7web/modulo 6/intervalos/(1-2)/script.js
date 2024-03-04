let timer;

document.querySelector('#botaoComecar').addEventListener('click', () => {
    timer = setInterval(showTime, 1000); //Execute showTime a cada 1000 milisegundos
});

document.querySelector('#botaoParar').addEventListener('click', () => {
    timer = clearInterval(timer);
});

function showTime() {
    const date = new Date();
    const hora = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    document.querySelector('.demo').innerHTML = hora;
};
