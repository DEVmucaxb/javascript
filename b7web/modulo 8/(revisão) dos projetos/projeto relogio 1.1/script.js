function update_clock() {
    const digital_clock_element = document.querySelector('.digital');
    const p_hour_element = document.querySelector('.p_h');
    const p_minute_element = document.querySelector('.p_m');
    const p_second_element = document.querySelector('.p_s');

    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const p_hour_deg = (360 / 12) * hour - 90;
    const p_minute_deg = (360 / 60) * minute - 90;
    const p_second_deg = (360 / 60) * second - 90;

    digital_clock_element.innerHTML = `${fix_zero(hour)}:${fix_zero(minute)}:${fix_zero(second)}`;

    p_hour_element.style.transform = `rotate(${p_hour_deg}deg)`;
    p_minute_element.style.transform = `rotate(${p_minute_deg}deg)`;
    p_second_element.style.transform = `rotate(${p_second_deg}deg)`;
};

function fix_zero(time) {
    return (time < 10) ? `0${time}` : time;
};

update_clock();
let clock_active = setInterval(update_clock, 1000);
