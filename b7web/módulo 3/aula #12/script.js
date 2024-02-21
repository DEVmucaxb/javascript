document.addEventListener('DOMContentLoaded', function () { //garante que o código só sera lido quando a HTML carregar
    const input = document.querySelector('input[type="text"]');

    input.addEventListener('keyup', soltou);

    function soltou(event) {
        console.log(event.code); //Passa alguns detalhes da tecla digitada
        console.log(event.key); //Passa apenas a tecla digitada (literalmente)
        console.log('Shift? ' + event.shiftKey); //Retorna se uma tecla qualquer estava apertada junto com outra (nesse caso o shift) em Bolean
        console.log('Ctrl? ' + event.ctrlKey);
        console.log('Alt? ' + event.altKey);
    };
});