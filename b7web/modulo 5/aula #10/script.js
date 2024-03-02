document.querySelector('#botao').addEventListener('click', clicou);

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(`Status ${response.status}`);
            return response.json();
        })
        .then((json) => {
            alert(`Título do 10 post: ${json[9].title}`);
        })
        .catch((error) => {
            alert(`[ERRO] Falha na requisição. Código de erro: ${error}`);
        })
        .finally(() => {
            alert('Acabou a requisição.');
        });
};