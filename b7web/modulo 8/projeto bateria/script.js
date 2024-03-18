document.body.addEventListener('keyup', (event) => {
    play_sound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== '') {
        let composition = song.split('');
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
    let wait = 0;

    for (let song_item of composition) {
        setTimeout(() => {
            play_sound(`key${song_item}`);
        }, wait);

        wait += 250;
    };
};
