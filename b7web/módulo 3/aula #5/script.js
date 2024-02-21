function clicou() {
    const teste = document.querySelector('#teste');
    console.log(teste.children[0].children);
    const ul = document.querySelector('#teste').querySelector('ul');
    //console.log(ul.innerHTML); //Exibi o conteudo
    ul.innerHTML = '<li>Item alterado</li>';

    ul.outerHTML = '<strong>Alterado</strong>'; //Pega todo o conteúdo interno + o próprio elemento (ou seja o ul e os li)
};