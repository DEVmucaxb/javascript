function clicou() {
    const button = document.querySelector('button');

    if (button.classList.contains('azul')) {
        button.classList.remove('azul');
        button.classList.add('verde');
    } else {
        button.classList.remove('verde');
        button.classList.add('azul');
    }; //Ou

    /*if (button.classList.contains('azul')) {
        button.classList.replace('azul', 'verde');
    } else {
        button.classList.replace('verde', 'azul');
    };*/

    //uso do .toggle()
    //button.classList.toggle('azul'); //Retira ou põe uma classe
};
