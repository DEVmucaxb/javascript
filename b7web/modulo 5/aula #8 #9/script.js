//Promise = Promessa

document.querySelector('#botao').addEventListener('click', clicou);

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            alert(`Título do terceiro post: ${json[2].title}`);
        })
        .catch((error) => { //Usado para tratar erros
            alert('[ERRO] Falha de Requisição');
            console.log(`Motivo do problema: ${error}`);
        })
        .finally(() => { //Será executado queira a requisição dado certo ou não
            alert('Opa, acabou tudo');
        });

};
