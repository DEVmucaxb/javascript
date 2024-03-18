//Inicial Data
const p_hour = document.querySelector('.p_h');
const p_minute = document.querySelector('.p_m');
const p_second = document.querySelector('.p_s');
const digital_clock_element = document.querySelector('.digital');

//Events
setInterval(update_clock, 1000);
update_clock();

//Functions
function update_clock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    digital_clock_element.innerHTML = `${fix_zero(hour)}:${fix_zero(minute)}:${fix_zero(second)}`;

    const position_p_hour = (360 / 12) * hour - 90;
    const position_p_minute = (360 / 60) * minute - 90;
    const position_p_second = (360 / 60) * second - 90;

    p_hour.style.transform = `rotate(${position_p_hour}deg)`;
    p_minute.style.transform = `rotate(${position_p_minute}deg)`;
    p_second.style.transform = `rotate(${position_p_second}deg)`;
};

function fix_zero(time) {
    return time = time < 10 ? `0${time}` : `${time}`;
};
