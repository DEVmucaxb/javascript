function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        getFullName() {
            return `${this.name} ${this.lastName}`
        }
    };
};

let person1 = createPerson('Bonieky', 'Lacerda', 90);
let person2 = createPerson('Junior', 'Francisco', 16);
console.log(person1.getFullName());
