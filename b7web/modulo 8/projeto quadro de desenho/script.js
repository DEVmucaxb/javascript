//Initial Data
let current_color = 'black';
const screen = document.querySelector('#tela');
let context = screen.getContext('2d');
let draw_mode = false;

let last_point_x = 0;
let last_point_y = 0;

//Events
document.querySelectorAll('.colorArea .color').forEach((item) => {
    item.addEventListener('click', color_click_event);
});

/*
Passo a passo para desenhar no Canvas:
    -quando mousedown, ative o Drawing Mode.
    -quando mousemove e, se Drawing Mode estiver ativado, desenhe.
    -quando mouseup, desative o Drawing Mode.
*/

screen.addEventListener('mousedown', mouse_down_event);
screen.addEventListener('mousemove', mouse_move_event);
screen.addEventListener('mouseup', mouse_up_event);


//Functions
function color_click_event(e) {
    let color = e.target.getAttribute('data-color');
    current_color = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
};

function mouse_down_event(e) {
    draw_mode = true;

    last_point_x = e.pageX - screen.offsetLeft;
    last_point_y = e.pageY - screen.offsetTop;
    //offset é um atributo que existe em todo elemento HTML
};

function mouse_move_event(e) {
    if (draw_mode) {
        draw(e.pageX, e.pageY);
    };
};

function mouse_up_event() {
    draw_mode = false;
};

function draw(x, y) {
    let current_point_x = x - screen.offsetLeft;
    let current_point_y = y - screen.offsetTop;

    context.beginPath(); //inicie processo de desenho 
    context.lineWidth = 5; //espessura da linha
    context.lineJoin = 'round'; //formato da linha
    context.moveTo(last_point_x, last_point_y); //posição inicial
    context.lineTo(current_point_x, current_point_y); //faça uma linha até...
    context.closePath(); //encerre processo de desenho
    context.strokeStyle = current_color;//colorir a linha
    context.stroke(); //finalize todo o processo

    //atualizar a posição anterior do mouse
    last_point_x = current_point_x;
    last_point_y = current_point_y;
};

//nota: não atualizar as last_point do mouse faz o canvas ter um corpotamento curioso.
