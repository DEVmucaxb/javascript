document.querySelector('#inserir_post').addEventListener('click', inserir_post);

async function inserir_post() {
    const posts_section = document.querySelector('#posts_section');
    posts_section.innerHTML = 'Carregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            body: JSON.stringify({
                title: 'Título de teste',
                body: 'Corpo de teste',
                userId: 4,
                cpf: 123456789,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    let json = await req.json();
    console.log(json)

};