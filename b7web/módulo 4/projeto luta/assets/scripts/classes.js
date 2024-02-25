//Knight or Sorcerer / Guerreiro ou Mago
//Little Monter or Big Monter

class Character {

    _life = 1;
    max_life = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    };

    get life() {
        return this._life;
    };

    set life(new_life) {
        if (typeof new_life === 'number') {
            this._life = new_life < 0 ? 0 : new_life;
        };
    };
};

class Knight extends Character {

    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.max_life = this.life;
    };
};

class Sorcerer extends Character {

    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.max_life = life;
    };
};

class Little_monster extends Character {

    constructor() {
        super('Little Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.max_life = this.life;
    };
};

class Big_monster extends Character {

    constructor() {
        super('Big Monster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.max_life = this.life;
    };
};

class Stage {

    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    };

    start() {
        this.update();

        //Todo o evento do botão de atacar
        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    };

    update() {
        //fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.max_life) * 100;
        this.fighter1El.querySelector('.lifebar .bar').style.width = `${f1Pct}%`;

        //fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.max_life) * 100;
        this.fighter2El.querySelector('.lifebar .bar').style.width = `${f2Pct}%`;
    };

    doAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage('Atacando cachorro morto');
            return;
        };

        let attack_factor = (Math.random() * 2).toFixed(2);
        let defense_factor = (Math.random() * 2).toFixed(2);

        let actual_attack = (attacking.attack * attack_factor).toFixed(2);
        let actual_defense = (attacked.defense * defense_factor).toFixed(2);

        if (actual_attack > actual_defense) {
            attacked.life -= actual_attack;
            this.log.addMessage(`${attacking.name} Causou ${actual_attack} de dano em ${attacked.name}`);
        } else {
            this.log.addMessage(`${attacked.name} Conseguio defender...`);
        };

        this.update();
    };

};

class Log {

    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    };

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    };

    render() {
        this.listEl.innerHTML = '';

        for (let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        };
    };
};