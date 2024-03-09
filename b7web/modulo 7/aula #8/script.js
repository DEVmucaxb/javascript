document.querySelector('#botao').addEventListener('click', load_posts);

document.getElementById('#posts').innerHTML = '';

function load_posts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            document.getElementById('#posts').innerHTML = json.length + 'Posts';

        })
        .catch((error) => {
            console.log(`[ERRO] Falha na requisição. Código de erro ${error}`);
        })
        .finally(() => {
            console.log('Acabou a requisição');
        });
};