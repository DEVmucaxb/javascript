let char = new Knight('Bonieky');
let monster = new Little_monster();
let log = new Log(document.querySelector('.log'));

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();
