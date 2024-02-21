function clicou() {
    const li = document.querySelector('li');
    console.log(li);
    li.style.backgroundColor = 'blue';
    li.style.color = '#fff';
    li.style.fontSize = '20px';

    //Ex2.:

    const lista_li = document.querySelectorAll('li');
    for (let c = 0; lista_li.length - 1; c++) {
        lista_li[c].setAttribute('class', 'cor_nova');
    };
};