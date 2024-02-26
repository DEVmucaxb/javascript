const defaultCharacter = {
    name: '',
    life: 1,
    max_life: 1,
    attack: 0,
    defense: 0
};

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name: name,
        life: 100,
        max_life: 100,
        attack: 10,
        defense: 8
    };
};

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        max_life: 50,
        attack: 14,
        defense: 3
    };
};

const create_Little_Monster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        max_life: 40,
        attack: 4,
        defense: 4
    };
};

const create_Big_Monster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        max_life: 120,
        attack: 16,
        defense: 6
    };
};

const stage = {
    /*fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,*/ //Opcional (n precisa)

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },

    update() {
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.max_life) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        //Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.max_life) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    },

    doAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('Alguém está morto não pode atacar!');
            return;
        }

        const attack_factor = (Math.random() * 2).toFixed(2);
        const defense_factor = (Math.random() * 2).toFixed(2);

        const actual_attack = attacking.attack * attack_factor;
        const actual_defense = attacked.defense * defense_factor;

        if (actual_attack > actual_defense) {
            attacked.life -= actual_attack;
            attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actual_attack.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            log.addMessage(`${attacked.name} Conseguio defender...`);
        };

        this.update();
    }
};

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },

    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';
        for (let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        };
    }
};