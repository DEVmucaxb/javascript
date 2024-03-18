document.querySelector('input#searchInput').focus();

document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault(); //evita que o form seja enviado

    let input = document.querySelector('input#searchInput').value;
    console.log(input);

    if (input !== '') {
        document.querySelector('.resultado').style.display = 'none';

        show_warning('Carregando...');
    } else {
        show_warning('Digite o nome de uma cidade');
    };

    let api_key = 'c43add8dced9c88e5cf47d2fe4d18e00';

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}&units=metric&lang=pt_br`;

    let req = await fetch(url);
    let json = await req.json();

    //console.log(json);
    if (json.cod === 200) {
        show_info({
            name: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            temp_icon: json.weather[0].icon,
            wind: json.wind
        });
    } else {
        show_warning('Não encontramos essa localização.');

    };
});

function show_warning(msg) {
    document.querySelector('.aviso').innerHTML = `${msg}`;
};

function show_info(json) {
    show_warning('');

    resultado.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    resultado.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    resultado.querySelector('.temp img').src = `http://openweathermap.org/img/wn/${json.temp_icon}@2x.png`;
    resultado.querySelector('.ventoInfo').innerHTML = `${json.wind.speed} <span>km/h</span>`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.wind.deg - 90}deg)`;

    let resultado = document.querySelector('.resultado');
    resultado.style.display = 'block';
};
