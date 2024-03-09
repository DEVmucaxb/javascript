document.querySelector('#send-archives').addEventListener('click', send_post);

function send_post() {
    const archive_image = document.querySelector('#archives').files[0];
    const imagem = document.createElement('img');

    imagem.setAttribute('src', ''); //Essa linha é opcional
    imagem.src = URL.createObjectURL(archive_image);
    //imagem.style.width = '200px'; //altera a CSS
    imagem.width = 200; //altera o tamanho real da imagem
    document.querySelector('#thumbnail-img').appendChild(imagem);
};
