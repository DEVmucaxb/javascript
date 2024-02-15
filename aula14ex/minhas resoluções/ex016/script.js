document.querySelector('input[type="button"]').addEventListener('click', contador);

function contador() {
    const inicio = Number(document.getElementById('inicio').value);
    const fim = Number(document.getElementById('fim').value);
    const passo = Number(document.getElementById('passo').value);
    const resultado = document.getElementById('resultado');

    if (inicio === fim || passo === 0 || inicio < fim && passo <= 0 || inicio > fim && passo >= 0) {
        window.alert('[ERRO] Contagem impossivel! Verifique os números e tente novamente!');
    } else {
        // window.alert('O programa continua...')
        let c = inicio;
        resultado.innerHTML = 'contando... ';

        if (inicio < fim) {
            while (c <= fim) {
                resultado.innerHTML += `${c} -> `;
                c += passo;
            };
        };

        if (inicio > fim) {
            while (c >= fim) {
                resultado.innerHTML += `${c} -> `;
                c += passo; //Tive que matutar um pouco pra consertar essa linha de 'c -= passo' para 'c += passo'
            };
        };
    };
};