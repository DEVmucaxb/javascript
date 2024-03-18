document.body.addEventListener('keyup', (event) => {
    play_sound(event.code.toLowerCase());
});

document.querySelector('button').addEventListener('click', play_composition);

function play_sound(sound) {
    const audio_element = document.querySelector(`#s_${sound}`);
    const key_element = document.querySelector(`div[data-key="${sound}"]`);

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

async function play_composition() {
    composition = document.querySelector('input#input').value.toLowerCase();
    composition = composition.split('');

    //meu código
    for (let song_item of composition) {
        play_sound(`key${song_item}`);

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 300);
        });
    };

    //código chatgpt
    /*for (let song_item of composition) {
        play_sound(`key${song_item}`);
        await new Promise((resolve) => setTimeout(resolve, 250)); // Espera 250ms entre as notas
    }*/
};
