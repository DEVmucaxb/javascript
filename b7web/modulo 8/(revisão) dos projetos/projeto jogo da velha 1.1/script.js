//Initial Data
let player_turn;
let playing = false;
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

//Events
document.querySelector('button.reset').addEventListener('click', reset);

document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click', item_click_event);
});


//Functions
function reset() {
    playing = true;
    player_turn = (Math.floor(Math.random() * 2)) < 1 ? 'x' : 'o';

    for (let i in square) {
        square[i] = '';
    };

    document.querySelector('.resultado').innerHTML = '--';

    render_square();
    render_info();

};

function item_click_event(e) {
    let item = e.target.getAttribute('data-item');

    if (square[item] === '' && playing === true) {
        square[item] = player_turn;

        toggle_player();
        render_info();
        render_square();
        check_game();

        if (!playing) {
            return;
        };
    };
};

function render_square() { //Ok
    for (let i in square) {
        let item = document.querySelector(`div[data-item="${i}"]`)

        document.querySelector(`div[data-item="${i}"]`).innerHTML = square[i];
    };
};

function render_info() { //Ok
    document.querySelector('.vez').innerHTML = player_turn;
};

function toggle_player() { //Ok
    player_turn = (player_turn === 'x') ? 'o' : 'x';
};

function check_game() {
    function check_winner_for() {
        let posibilitys = [
            'a1,a2,a3',
            'b1,b2,b3',
            'c1,c2,c3',
            'a1,b1,c1',
            'a2,b2,c2',
            'a3,b3,c3',
            'a1,b2,c3',
            'a3,b2,c1'
        ];

        for (let i in posibilitys) {
            let pos_array = posibilitys[i].split(',');

            let has_won = pos_array.every((option) => {
                return square[option] === player_turn;
            });

            if (has_won) {
                return true;
            };
        };
    };

    function is_full() { //Ok
        for (let i in square) {
            if (square[i] === '') {
                return false;
            };
        };

        return true;
    };

    if (check_winner_for()) {
        playing = false;
        document.querySelector('.resultado').innerHTML = `O jogador "${player_turn}" venceu`;
        return;
    } else if (is_full()) {
        playing = false;
        document.querySelector('.resultado').innerHTML = 'Deu empate';
    };
};

reset();

//Por algum motivo, quando um player vence, o programa não encerra de imediato. F
