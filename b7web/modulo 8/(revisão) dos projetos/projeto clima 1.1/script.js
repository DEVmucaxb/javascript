document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    show_warning('Carregando...');

    const api_key = 'c43add8dced9c88e5cf47d2fe4d18e00';
    const input = document.querySelector('#searchInput').value.toLowerCase();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=${api_key}&units=metric&lang=pt_br`;

    let request = await fetch(url);
    let json = await request.json();

    let json_object = {
        cod: json.cod,
        city: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        wind_speed: json.wind.speed,
        wind_deg: json.wind.deg,
        icon: json.weather[0].icon
    };

    update_weather(json_object);
});

function show_warning(msg) {
    document.querySelector('div.aviso').innerHTML = msg;
};

function update_weather(json_object) {
    if (json_object.cod === 200) {

        let weather_icon = document.querySelector('div.temp img');

        document.querySelector('.resultado .titulo').innerHTML = `${json_object.city}, ${json_object.country}`;

        document.querySelector('.tempInfo').innerHTML = `${json_object.temp} <sup>ºC</sup>`;

        document.querySelector('.ventoInfo').innerHTML = `${json_object.wind_speed} <span>km/h</span>`;

        document.querySelector('div.ventoPonto').style.transform = `rotate(${json_object.wind_deg - 90}deg)`;

        weather_icon.src = `http://openweathermap.org/img/wn/${json_object.icon}@2x.png`;

        show_warning('');

        document.querySelector('div.resultado').style.display = 'block';
    };
};
