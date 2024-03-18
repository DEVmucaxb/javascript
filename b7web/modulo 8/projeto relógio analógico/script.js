let digital_element = document.querySelector('.digital');
let p_h_element = document.querySelector('.p_h');
let p_m_element = document.querySelector('.p_m');
let p_s_element = document.querySelector('.p_s');

function update_clock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digital_element.innerHTML = `${fiz_zero(hour)}:${fiz_zero(minute)}:${fiz_zero(second)}`;

    let position_p_s = (360 / 60) * second - 90;
    let position_p_m = (360 / 60) * minute - 90;
    let position_p_h = (360 / 12) * hour - 90;

    p_h_element.style.transform = `rotate(${position_p_h}deg)`;
    p_m_element.style.transform = `rotate(${position_p_m}deg)`;
    p_s_element.style.transform = `rotate(${position_p_s}deg)`;
};

function fiz_zero(time) {
    return time < 10 ? `0${time}` : time;
};

setInterval(update_clock, 1000);
update_clock();
