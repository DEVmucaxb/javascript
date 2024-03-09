

document.querySelector('#load_posts').addEventListener('click', loadPosts);

function loadPosts() {
    const section_posts = document.querySelector('#posts_section');
    section_posts.innerHTML = 'Carregando';

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            section_posts.innerHTML = `${json.length} Posts`;
            montar_blog(json, section_posts);
        })
        .catch((error) => {
            section_posts.innerHTML = `[ERRO] Falha na requisição. Código de erro ${error}`;
        })
        .finally(() => {
            console.log(`Fim da requisição`);
        });

};

function montar_blog(posts_json, section_posts) {
    let posts = '';

    for (let i = 0; i < posts_json.length; i++) {
        posts += `<h3>${posts_json[i].title}</h3>`;
        posts += `<p>${posts_json[i].body}</p><br><hr>`;
    };

    section_posts.innerHTML = posts;
};
