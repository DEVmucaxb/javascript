class Person {

    nacionality = 'Brazil';

    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let p1 = new Person('João', 20); //Essas linhas de código chamam-se instância
let p2 = new Person('Maria', 50);
let p3 = new Person('Pedro', 40);

console.log(`P1 = ${p1.name} tem ${p1.age} anos`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos`);
console.log(`P3 = ${p3.name} tem ${p3.age} anos`);
