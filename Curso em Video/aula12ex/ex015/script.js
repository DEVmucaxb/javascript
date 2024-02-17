function verificar() {
    var ano = new Date().getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // idade = 1
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 2) {
                // Bebê
                img.setAttribute('src', 'imagens/imagens-redondas/bebê.png')
            } else if (idade <= 10) {
                // criança masculina
                img.setAttribute('src', 'imagens/imagens-redondas/criança-m.png')
            } else if (idade <= 21) {
                // Jovem homem
                img.setAttribute('src', 'imagens/imagens-redondas/jovem-m.png')
            } else if (idade <= 45) {
                //Homem Adulto
                img.setAttribute('src', 'imagens/imagens-redondas/adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/imagens-redondas/velho-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 2) {
                // Bebê
                img.setAttribute('src', 'imagens/imagens-redondas/bebê.png')
            } else if (idade < 10) {
                // Criança feminina
                img.setAttribute('src', 'imagens/imagens-redondas/criança-f.png')
            } else if (idade < 21) {
                // Jovem Mulher
                img.setAttribute('src', 'imagens/imagens-redondas/jovem-f.png')
            } else if (idade <= 45) {
                // Mulher Adulta
                img.setAttribute('src', 'imagens/imagens-redondas/adulto-f.png')
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/imagens-redondas/velha-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}