document.querySelector('#send-archives').addEventListener('click', send_post);

async function send_post() {
    const archive_files = document.querySelector('#archives').files;
    //console.log(archive_files[0]); //Pega o primeiro arquivo da lista dos diversos que o usuário possa ter enviado

    let data = new FormData();

    data.append('title', 'bla bla bla');
    data.append('Arquivo-post', archive_files[0]);

    let req = await fetch('https://www.meusite.com.br/upload',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: data
        });
};
