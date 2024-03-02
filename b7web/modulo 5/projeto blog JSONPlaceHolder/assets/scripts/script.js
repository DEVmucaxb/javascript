//1 etapa: Ler os posts da API e exibir na tela
async function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...';
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if (json.length > 0) {
        postArea.innerHTML = '';
        for (let i in json) {
            let postHTML = `<div class="postHTML"><h1>${json[i].title}</h1><p>${json[i].body}</p><hr></div>`;
            postArea.innerHTML += postHTML;
        };
    } else {
        postArea.innerHTML = 'Nenhum post para exibir';
    };
};
readPosts();


//2 etapa: Permitir ao usuário adicionar um post novo
document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if (title.length > 0 && body.length > 0) {
        add_new_post(title, body);
    } else {
        alert('Preencha todos os campos');
    };
});

async function add_new_post(title, body) {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 2
            })
        }
    );

    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';
    readPosts();
};