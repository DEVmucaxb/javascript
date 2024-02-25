class Person {

    age = 0;

    constructor(name) {
        this.name = name;
    };

    sayHi() {
        console.log(`${this.name} diz Oi`);
    };
};

class Student extends Person {

    constructor(name, id) {
        super(name);
        this.id = id;
    };

    sayHi() {
        console.log(`${this.name} é um estudante e diz Oi`);
    }; //Estou sobreescrevendo a função sayHi() para a classe Student

    sayHello() {
        supper.sayHi(); //Faz o sayHello executar o sayHi lá do supper
    };
};

let p1 = new Student('Bonieky', 1);

p1.age = 20;
p1.sayHi();

console.log(`${p1.name} tem ${p1.age} anos e matrícula #${p1.id}`);
