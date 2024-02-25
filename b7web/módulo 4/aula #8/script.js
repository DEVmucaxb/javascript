class Person {

    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name;
    };

    sayHi() {
        console.log(`${this.name} tem ${Person.hands}`);
    };

    static sayGoodMorning() {
        console.log('Good Morning');
    }
};

let p1 = new Person('Bonieky');
console.log(`${p1.name} tem ${Person.hands} mãos.`);

Person.sayGoodMorning();