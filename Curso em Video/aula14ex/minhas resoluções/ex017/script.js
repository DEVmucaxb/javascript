document.querySelector('input[type="button"]').addEventListener('click', gerarTabuada);

function gerarTabuada() {
    const num = Number(document.getElementById('num').value);
    const select = document.getElementById('tabuada');

    for (let c = 1; c <= 10; c++) {
        let options = document.createElement('option');
        options.innerHTML = `${num} * ${c} = ${num * c}`;
        select.appendChild(options);
    }
}
/* Eu consegui fazer o exercício sem olhar a resolução... massa! */
