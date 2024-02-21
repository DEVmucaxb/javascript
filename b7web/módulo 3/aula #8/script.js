function clicou() {
    const input = document.querySelector('input');

    //uso do .getAttribute()
    input.getAttribute('placeholder'); //Pega o atributo placeholder

    //uso do .hasAttribute()
    if (input.hasAttribute('placeholder')) {
        console.log('Tem placeholder');
    } else {
        console.log('Não tem placeholder');
    };

    //Uso do .setAttribute() Ex.:
    input.setAttribute('placeholder', 'placeholder alterado');

    //Ex2.:
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        document.querySelector('button.botao').innerHTML = 'Mostrar senha';
    } else {
        input.setAttribute('type', 'password');
        document.querySelector('button.botao').innerHTML = 'Ocultar senha';
    };
};