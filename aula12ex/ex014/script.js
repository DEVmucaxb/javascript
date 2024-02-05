function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date().getHours()
    // hora = 18 //Testando...
    msg.innerHTML = `Agora são ${hora}:${new Date().getMinutes()} `
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'imagens/manha-redonda.png'
        window.document.body.style.background = '#F2C3A7'
    } else if (hora <= 18) {
        //Boa tarde
        img.src = 'imagens/tarde-redonda.png'
        window.document.body.style.background = '#F28705'
    } else {
        //Boa Noite
        window.document.getElementById('imagem').src = 'imagens/noite-redonda.png'
        window.document.body.style.background = '#513E59'
    }
}
