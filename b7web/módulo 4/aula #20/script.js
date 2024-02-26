//Objetos não tem um construtor, somente classes
let person = {
    name: 'Bonieky',
    lastName: 'Lacerda',
    age: 90,
    getFullName() {
        return `${this.name} ${this.lastName}`
    },
    start() {
        console.log('Deu start na pessoa');
    }
};

person.start();
console.log(person.getFullName);
