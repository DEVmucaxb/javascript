document.querySelector('form.busca').addEventListener('submit', async (e) => {
    e.preventDefault();

    const input = document.querySelector('input#searchInput').value;

    if (input !== '') {
        show_warning('');

        const api_key = 'c43add8dced9c88e5cf47d2fe4d18e00';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=${api_key}&units=metric&lang=pt_br`;
        let request = await fetch(url);
        let json = await request.json();

        if (json.cod === 200) {

            let json_object = {
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                wind_speed: json.wind.speed,
                wind_deg: json.wind.deg,
                icon: json.weather[0].icon,
            };

            render_result(json_object);
        } else {
            show_warning('Cidade não encontrada');
        };

    } else {
        show_warning('Digite o nome de uma cidade');
    };
});

function show_warning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
};

function render_result(json_object) {
    show_warning('');

    document.querySelector('div.resultado .titulo').innerHTML = `${json_object.name}, ${json_object.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json_object.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json_object.wind_speed} <span>km/h</span>`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${json_object.wind_deg - 90}deg)`;

    document.querySelector('div.resultado').style.display = 'block';
};
