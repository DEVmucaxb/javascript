document.body.addEventListener('keyup', (event) => {
    play_sound(event.code.toLowerCase());
});

document.querySelector('button').addEventListener('click', () => {
    let composition = document.querySelector('#input').value.toLowerCase();

    composition = composition.split('');
    play_composition(composition);
});

function play_sound(sound) {
    let sound_element = document.querySelector(`#s_${sound}`);
    let key_element = document.querySelector(`div[data-key="${sound}"]`);

    if (sound_element) {
        sound_element.currentTime = 0;
        sound_element.play();
    };

    if (key_element) {
        key_element.classList.add('active');

        setTimeout(() => {
            key_element.classList.remove('active');
        }, 250);
    };


};

async function play_composition(composition) {
    for (let sound of composition) {
        await new Promise(resolve => {
            setTimeout(resolve, 250);
        });
        play_sound(`key${sound}`);
    };
};
