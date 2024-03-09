document.querySelector('#load_posts').addEventListener('click', carregar_posts);

async function carregar_posts() {
    const posts_section = document.querySelector('#posts_section');
    posts_section.innerHTML = 'Carregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();

    gerar_posts(json, posts_section);
};

function gerar_posts(post_json, posts_section) {
    posts_section.innerHTML = '';

    for (i in post_json) {
        posts_section.innerHTML += `<h3>${post_json[i].title}</h3>`;
        posts_section.innerHTML += `<p>${post_json[i].body}</p><br><hr>`;
    };
};