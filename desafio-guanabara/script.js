const select = document.getElementById('select');
const resultado = document.getElementById('resultado');

let lista = [];

document.getElementById('adicionar').addEventListener('click', adicionar_na_lista);
document.getElementById('finalizar').addEventListener('click', finalizarLista);

function adicionar_na_lista() {
    const numero = document.querySelector('input[type="number"]').value;
    if (numero < 1 || numero > 100) {
        //Verifica se o numero do input é menor do que 0 ou maior que 100
        window.alert('Digite um número entre 1 e 100');

        //Complementando o código (depois de pronto)...
        document.getElementById('n1').value = ''; //Esvazia o input
        document.getElementById('n1').focus(); //põe o cursor no input

    } else {
        //Verifica se o numero do input já esta na lista
        if (lista.includes(numero)) { // A sintaxe "if (numero in lista)" { está errada!
            window.alert(`O número ${numero} já está presente na lista, por favor, digite outro`);

            //Complementando o código (depois de pronto)...
            document.getElementById('n1').value = ''; //Esvazia o input
            document.getElementById('n1').focus(); //põe o cursor no input

        } else {
            //Adiciona o numero do input na lista e o exibi na tela
            lista.push(numero);
            const option_numero_lista = document.createElement('option');
            option_numero_lista.text = `Valor ${numero} adicionado`;
            select.appendChild(option_numero_lista);
            console.log(lista);

            //Complementando o código (depois de pronto)...
            document.getElementById('n1').value = ''; //Esvazia o input
            document.getElementById('n1').focus(); //põe o cursor no input

        };
    };
};

function finalizarLista() {
    resultado.innerHTML = '';
    let paragrafo = document.createElement('p');
    paragrafo.innerHTML += `Ao todo temos ${lista.length} números cadastrados <br>`;
    let lista_temporaria = lista;

    lista_temporaria.sort(); //Põe a array em ordem crescente (O problema do maior e menor numero serem incorretos está aqui...
    //Depois de pesquisar vi que essa linha na vdd põe os elementos m ordem alfabetica e não númerica.
    lista_temporaria.sort((a, b) => a - b); //Código correto

    let maior_numero = lista_temporaria[lista_temporaria.length - 1];
    let menor_numero = lista_temporaria[0];
    let soma_todos_numeros = 0;
    let media_todos_numeros = 0;

    //Somar todos os valores da array
    for (let c = 0; c <= lista_temporaria.length - 1; c++) {
        soma_todos_numeros += Number(lista_temporaria[c]);
    }

    //Calcular a média aritmetica dos valores da array
    media_todos_numeros = soma_todos_numeros / (lista_temporaria.length);

    //Mostrar a mensagem ao usuário
    paragrafo.innerHTML += `O maior valor informado foi ${maior_numero} <br>`;
    paragrafo.innerHTML += `O menor valor informado foi ${menor_numero} <br>`;
    paragrafo.innerHTML += `Somando todos os valores, temos ${soma_todos_numeros} <br>`;
    paragrafo.innerHTML += `A média dos valores digitados é ${media_todos_numeros}`;
    resultado.appendChild(paragrafo);
};