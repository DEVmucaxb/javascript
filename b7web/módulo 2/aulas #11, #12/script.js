let count = 0; //Variável de escopo global não variável global (Seria o "var")

function add() {
    let count = 0;
    count += 10;
};

add();
add();

console.log(count);

//Quando uma 2 variáveis de mesmo nome, uma com escopo global e outra com escopo local, a de escopo local tem preferencia.


console.log();
console.log('Aula12_____________________________________________');

/*function square(x) {
    return x * x;
};

console.log(square(10));


function add_squares(a=0, b=0) {
    return square(a) + square(b);
};*/


function add_squares(a = 0, b = 0) {
    const square = (x) => x * x;
    return square(a) + square(b);
};

console.log(add_squares(10, 5));