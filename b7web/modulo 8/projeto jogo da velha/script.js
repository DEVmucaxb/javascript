// Inicial Data
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

let player_turn = '';
let warning = '';
let playing = false;

reset();

// Events
document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click', item_click);
});


//Functions
function reset() {
    warning = '';
    player_turn = Math.floor(Math.random() * 2) < 1 ? 'x' : 'o';

    for (let i in square) {
        square[i] = '';
    };

    playing = true;

    render_square();
    render_info();
};

function render_square() {
    for (let i in square) {
        let item = document.querySelector(`div[data-item="${i}"]`);
        item.innerHTML = square[i];
    };

    check_game();
};

function render_info() {
    document.querySelector('.vez').innerHTML = player_turn;
    document.querySelector('.resultado').innerHTML = warning;
};

function item_click(event) {
    let item = event.target.getAttribute('data-item');

    if (playing && square[item] === '') {
        square[item] = player_turn;
    };

    render_square();
    toggle_player();
};

function toggle_player() {
    player_turn = (player_turn === 'x') ? 'o' : 'x';
    render_info();
};

function check_game() {
    if (check_winner_for('x')) {
        warning = 'O "x" venceu';
        playing = false;
    } else if (check_winner_for('o')) {
        warning = 'O "o" venceu';
        playing = false;
    } else if (is_full()) {
        warning = 'Deu empate';
        playing = false;
    }
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
        let p_array = possibilitys[w].split(',');
        let has_won = p_array.every((option) => {
            return square[option] === player_turn;
        });
        if (has_won) {
            return true;
        };
    };

    return false; //Caso ele passe pelo for inteiro e não haja vencedor
};

function is_full() {
    for (let i in square) {
        if (square[i] === '') {
            return false;
        };
    };

    return true;
};