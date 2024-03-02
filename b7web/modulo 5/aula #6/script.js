document.querySelector('#botao').addEventListener('click', clicou)
function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        //console.log('Funcionou!');
        //console.log(response.body);
        return response.json();
    }).then((json) => {
        console.log(`Título do primeiro post: ${json[0].title}`);
    });
};