//Initial Data
let current_color = 'black';
const screen = document.querySelector('#tela');
let context = screen.getContext('2d');
let draw_mode = false;
let last_pointer_x = 0;
let last_pointer_y = 0;

//Events
document.querySelectorAll('.color').forEach((item) => {
    item.addEventListener('click', color_click_event);
});

screen.addEventListener('mousedown', mouse_down_event);
screen.addEventListener('mousemove', mouse_move_event);
screen.addEventListener('mouseup', mouse_up_event);

document.querySelector('.clear').addEventListener('click', clearScreen)

//Functions

function color_click_event(e) {
    let color = e.target.getAttribute('data-color');
    document.querySelector('.color.active').classList.remove('active');
    document.querySelector(`div[data-color=${color}]`).classList.add('active');
    current_color = color;
};

function mouse_down_event(e) {
    draw_mode = true;
    last_pointer_x = e.pageX - screen.offsetLeft;
    last_pointer_y = e.pageY - screen.offsetTop;
};

function mouse_move_event(e) {
    if (draw_mode) {
        draw(e.pageX, e.pageY);
    };
};

function mouse_up_event(e) {
    draw_mode = false;
};

function draw(x, y) {
    let current_pointer_x = x - screen.offsetLeft;
    let current_pointer_y = y - screen.offsetTop;

    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = 'round';
    context.moveTo(last_pointer_x, last_pointer_y);
    context.lineTo(current_pointer_x, current_pointer_y);
    context.closePath();
    context.strokeStyle = current_color;
    context.stroke();

    last_pointer_x = current_pointer_x;
    last_pointer_y = current_pointer_y;
};

function clearScreen() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};
