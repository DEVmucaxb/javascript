document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    const input = document.querySelector('#searchInput').value;
    const api_key = 'c43add8dced9c88e5cf47d2fe4d18e00';

    if (input !== '') {
        show_warning('carregando...');

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=${api_key}&units=metric&lang=pt_br`;
        let request = await fetch(url);
        let json_obj = await request.json();

        if (json_obj.cod === 200) {
            show_info(json_obj);
        } else {
            show_warning('Não encontramos essa cidade');
        };

    } else {
        show_warning('Digite o nome de uma cidade');
    };
});

function show_warning(msg) {
    document.querySelector('div.aviso').innerHTML = msg;
};

function show_info(json_obj) {
    show_warning('');

    const title = `${json_obj.name}, ${json_obj.sys.country}`;
    const temp = json_obj.main.temp;
    const wind_speed = json_obj.wind.speed;
    const wind_deg = json_obj.wind.deg;
    const icon = json_obj.weather[0].icon;

    document.querySelector('.titulo').innerHTML = title;
    document.querySelector('.tempInfo').innerHTML = `${temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${wind_speed} <span>km/h</span>`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${wind_deg - 90}deg)`;
    document.querySelector('.temp img').src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    document.querySelector('.resultado').style.display = 'block';
};
