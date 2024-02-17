function parImp(n) {
    if (n % 2 === 0) {
        return 'par';
    } else {
        return 'Ímpar';
    };
};

let resultado = parImp(997);
console.log(resultado); //Ou console.log(parImp(997));
