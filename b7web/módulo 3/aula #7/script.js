function clicou() {
    const ul = document.querySelector('#teste').querySelector('ul');
    const new_button = document.createElement('button');

    new_button.innerText = 'Botão';
    ul.after(new_button);

    //____________________x________________________

    const new_ul = document.createElement('ul');
    ul.after(new_ul);
    for (let c = 1; c < 10; c++) {
        const new_li = document.createElement('li');
        new_li.innerText = 'Item add' + c;
        new_ul.append(new_li);
    };
};