let amigo = {
    nome: 'José',
    sexo: 'm',
    peso: 85.4,
    engordar(p = 0) {
        console.log('Engordou');
        this.peso += p;
    }
};

amigo.engordar(2); //Adiciona 2Kg ao peso de José
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);
