document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir_post').addEventListener('click', inserir);

//let clicou = async () => {
async function clicou() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(`Título do 1 post: ${json[0].title}`);

    alert('Clicou');
};

//let inserir = async () => {
async function inserir() {
    //GET, POST, PUT, DELETE
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Título de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        });

    let json = await response.json();
    console.log(json);

}