document.querySelector('#send-archives').addEventListener('click', send_post);
function send_post() {
    let reader = new FileReader();
    let archive_image = document.querySelector('#archives').files[0];

    reader.onloadend = function () {
        let imagem = document.createElement('img');
        imagem.src = reader.result;
        imagem.width = 200;

        document.querySelector('#thumbnail-img').appendChild(imagem);
    };

    reader.readAsDataURL(archive_image);
};

/*O FileReader tem a vantagem de: Manipular qualquer tipo de arquivo, seja imagem (blob) ou não.*/
