const char = createKnight('Bonieky');
const monster = create_Big_Monster();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
);
