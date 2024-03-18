//Events
document.body.addEventListener('keyup', (event) => {
    play_sound(event.code.toLowerCase());
});

document.querySelector('button').addEventListener('click', play_composition);

//Functions
function play_sound(sound) {
    const sound_element = document.querySelector(`audio#s_${sound}`);
    const key_element = document.querySelector(`div[data-key="${sound}"]`);

    if (sound_element) {
        sound_element.currentTime = 0;
        sound_element.play();
    };

    if (key_element) {
        key_element.classList.add('active');
        setTimeout(() => {
            key_element.classList.remove('active');
        }, 300)
    };
};

async function play_composition() {
    let composition = document.querySelector('#input').value;

    composition = composition.split(''); //transforma-la em array
    //console.log(composition);

    for (let song_item of composition) {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 250);

            play_sound(`key${song_item}`);
        });
    };
};


//pegar todas as teclas que forem digitadas na tela
//pegar a tag audio correspondente
//reproduzir o som
//adicionar a animação na tela
//retirar a animação da tela

//pegar o que estiver no input para criar a composição
//transformar a composição em uma array
//tocar a composição
