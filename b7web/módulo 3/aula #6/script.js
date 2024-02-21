function clicou() {
    const teste = document.querySelector('#teste');
    const ul = document.querySelector('#teste').querySelector('ul');

    ul.children[0].append('(Alterado)');

    let newLi = document.createElement('li');
    newLi.innerText = 'Item Adicionado';

    //ul.appendChild(newLi);
    ul.prepend(newLi); //adicona o elemento ao começo diferentemente do apprendChild()
};