const defaultUser = {
    name: '',
    email: '',
    level: 1
};

let user1 = {
    ...defaultUser, //herdou
    name: 'Bonieky', //sobreescreveu
    email: 'suporte@b7web.com.br'
};

let adm1 = {
    ...defaultUser, //herdou
    name: 'Admin Boladão', //sobreescreveu
    email: 'adm@admboladão.com.br',
    level: 2
};

console.log(adm1);