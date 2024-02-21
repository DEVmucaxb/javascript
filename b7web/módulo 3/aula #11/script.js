document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('input[type="text"]');

    input.addEventListener('keydown', apertou);
    input.addEventListener('keypress', segurou);
    input.addEventListener('keyup', soltou);

    function apertou() {
        console.log('APERTOU!');
    };

    function segurou() {
        console.log('SEGUROU!');
    };

    function soltou() {
        console.log('SOLTOU!');
    };
});