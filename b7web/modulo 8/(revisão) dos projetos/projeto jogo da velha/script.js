//Initial Data
let player_turn = null;
let playing = false;
let warning = '';

let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

//Events
document.querySelectorAll('div.area').forEach((item) => {
    item.addEventListener('click', item_click);
});

document.querySelector('button.reset').addEventListener('click', reset);

//Functions
function reset() { //terminada
    playing = true;
    player_turn = (Math.floor(Math.random() * 2) < 1) ? 'x' : 'o';

    document.querySelector('.vez').innerHTML = player_turn;

    for (let i in square) {
        square[i] = '';
    };

    render_square();
    render_info();
};

function item_click(e) { //terminada
    let item = e.target.getAttribute('data-item');

    if (square[item] === '' && playing === true) {
        square[item] = player_turn;

        render_square();
        check_game();
        render_info();
        toggle_player();
    };
};

function render_info() { //terminada
    document.querySelector('.vez').innerHTML = player_turn;
    document.querySelector('div.resultado').innerHTML = warning;
};

function toggle_player() { //terminada
    player_turn = (player_turn === 'x') ? 'o' : 'x';
};

function render_square() { //terminada
    for (let i in square) {
        let item = document.querySelector(`div[data-item="${i}"]`);
        item.innerHTML = square[i];
    };
};

function check_game() { //terminada
    if (check_winner_for()) {
        warning = `O ${player_turn} venceu`;
        playing = false;
    } else if (is_full()) {
        warning = 'Deu empate';
        playing = false;
    };
};

function check_winner_for() {
    let possibilitys = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',
        'a1,b2,c3',
        'a3,b2,c1'
    ];

    for (let w in possibilitys) {
        let pos_array = possibilitys[w].split(',');

        has_won = pos_array.every((option) => {
            return square[option] === player_turn;
        });

        if (has_won) {
            return true;
        };
    };

    return false;
};

function is_full() { //terminada
    for (let i in square) {
        if (square[i] === '') {
            return false;
        };
    };

    return true;
};

reset();
