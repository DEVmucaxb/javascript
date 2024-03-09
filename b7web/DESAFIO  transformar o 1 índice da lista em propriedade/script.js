class Client {
    static hands = 2;
    constructor(id, name, age, bank_balance) {
        this.id = id,
            this.name = name,
            this.age = age,
            this.bank_balance = bank_balance
    };
};

//factory
function create_client(id, name, age, balance) {
    let client = new Client(id, name, age, balance);
    client.id = id;
    client.name = name;
    client.age = age;
    client.balance = balance;
    return client;
};


let client1 = create_client(234, 'Samuel', 17, 10000);
console.log(client1);

let client2 = create_client(792, 'Daniel', 31, 3450);
console.log(client2);

let client3 = create_client(528, 'Ohashi', 24, 67030);
console.log(client3);

let client4 = create_client(149, 'João', 19, 9432);
console.log(client4);



client1 = Object.entries(client1); //Transformei o client1 em uma array
console.log(client1);

/*
[
  [ 'id', 234 ],
  [ 'name', 'Samuel' ],
  [ 'age', 17 ],
  [ 'bank_balance', 10000 ],
  [ 'balance', 10000 ]
]
*/


//__________________Desafio de código:___________________
//  Criar um algoritmo que: reverta o método entries

//  Resumidamente: retire, o 1º parametro de cada lista
//  transformando o mesmo em uma propriedade para o objeto
//  da qual a lista se transformará.

//Código resolvido:




/*
let client_object = client1[0].map((actual_iten) => {

    let temp_propriedade;

    //[actual_iten][0]

    return [actual_iten][0]

});

console.log(client_object)*/

//ERRADO!!!
