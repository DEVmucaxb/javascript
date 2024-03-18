let areas = {
    a: null,
    b: null,
    c: null
};

document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('dragstart', drag_start);
    item.addEventListener('dragend', drag_end);
});


document.querySelectorAll('.area').forEach((area) => {
    area.addEventListener('dragover', drag_over);
    area.addEventListener('dragleave', drag_leave);
    area.addEventListener('drop', drop);
});

document.querySelector('.neutralArea').addEventListener('dragover', drag_over_neutral_area);
document.querySelector('.neutralArea').addEventListener('dragleave', drag_leave_neutral_area);
document.querySelector('.neutralArea').addEventListener('drop', drop_neutral_area);

//Functions Item
function drag_start(e) {
    e.currentTarget.classList.add('dragging');
};

function drag_end(e) {
    e.currentTarget.classList.remove('dragging');
};

//Functions Area
function drag_over(e) {
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault(); //Premite que o drop funcione
        e.currentTarget.classList.add('hover');
    };
};

function drag_leave(e) {
    e.currentTarget.classList.remove('hover');
};

function drop(e) {
    e.currentTarget.classList.remove('hover');

    if (e.currentTarget.querySelector('.item') === null) {
        let drag_item = document.querySelector('.item.dragging');
        e.currentTarget.appendChild(drag_item);

        update_areas();
    };
};

//Functions Neutral Area
function drag_over_neutral_area(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
};

function drag_leave_neutral_area(e) {
    e.currentTarget.classList.remove('hover');
};

function drop_neutral_area(e) {
    e.currentTarget.classList.remove('hover');

    let drag_item = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(drag_item);

    update_areas();
};

//Logic Functions
function update_areas() {
    document.querySelectorAll('.area').forEach((area) => {
        let name = area.getAttribute('data-name');

        if (area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }
    });

    //console.log(areas);
    if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct');
    } else {
        document.querySelector('.areas').classList.remove('correct');
    };
};
