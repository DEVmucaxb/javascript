const ul = document.querySelector('ul');
const input_itens = document.querySelector('input[type="text"]');

input_itens.addEventListener('keyup', digitou);

function digitou(event) {
    //console.log(event.key);
    if (event.key === 'Enter') {
        const new_li = document.createElement('li')
        new_li.innerText = input_itens.value;
        ul.appendChild(new_li);

        input_itens.value = '';
        input_itens.focus();
    };
};