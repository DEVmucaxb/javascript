document.body.addEventListener('keyup', (event) => {
    play_sound(event.code.toLowerCase());
}); //ok

document.querySelector('.composer button').addEventListener('click', () => {
    let composition = document.querySelector('#input').value.toLowerCase();

    if (composition != '') {
        composition = composition.split(''); //essa linha transforma os caracteres em uma array
        play_composition(composition);
    };
});


function play_sound(sound) {
    let audio_element = document.querySelector(`#s_${sound}`);
    let key_element = document.querySelector(`div[data-key="${sound}"]`);

    if (audio_element) {
        audio_element.currentTime = 0;
        audio_element.play();
    };

    if (key_element) {
        key_element.classList.add('active');

        setTimeout(() => {
            key_element.classList.remove('active');
        }, 300);
    };
};

function play_composition(composition) {
    let timer = 0;
    for (actual_sound of composition) {
        setTimeout(() => {
            play_sound(`key${actual_sound}`);
        }, timer);

        timer += 250;
    };
};