document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir_post').addEventListener('click', inserir);

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(`Status ${response.status}`);
            return response.json();
        })
        .then((json) => {
            alert(`Título do primeiro post: ${json[0].title}`);
        })
        .catch((error) => {
            alert(`[ERRO] Falha na reqisição. código de erro ${error}`);
        })
        .finally(() => {
            alert('Acabou');
        });
};

function inserir() {
    //GET, POST, PUT, DELETE
    //Generalização: Pegar, Adicionar, Substituir, deletar
    fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify({
                title: 'Título de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        });
};