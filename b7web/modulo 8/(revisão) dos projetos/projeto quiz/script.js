//Initial Data
let current_question = 0;
let correct_answers = 0;


//Events
document.querySelectorAll('.options').forEach((item) => {
    item.addEventListener('click', option_clicked);
});

document.querySelector('button').addEventListener('click', reset);


//Functions
function show_question() {
    let q = questions[current_question];
    let options_html = '';

    if (q) {
        for (let i in q.options) {
            options_html += `<div class="option" data-op="${i}"><span>${Number(i) + 1}</span> ${q.options[i]}</div>`;
        };

        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = options_html;

        document.querySelector('.questionArea').style.display = 'block';
    } else {
        //Finalizar o quiz
        finish_quiz();
    };

    update_bar();
};

function finish_quiz() {
    let pct = Math.floor((correct_answers / questions.length) * 100);

    if (pct < 30) {
        document.querySelector('.scoreText1').innerHTML = 'Tá ruim ein';
        document.querySelector('.scorePct').style.color = 'red';
    } else if (pct < 70) {
        document.querySelector('.scoreText1').innerHTML = 'Mais sorte na próxima';
        document.querySelector('.scorePct').style.color = 'yellow';
    } else {
        document.querySelector('.scoreText1').innerHTML = 'Parabéns';
        document.querySelector('.scorePct').style.color = 'green';
    };

    //Atualiza os resultados
    document.querySelector('.scorePct').innerHTML = `Acertou ${pct}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correct_answers}.`;

    //Exibi os resultados na tela
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';

    update_bar();
};

function option_clicked(e) {
    let clicked_option = Number(e.target.getAttribute('data-op'));
    let q = questions[current_question];

    if (q) {
        if (clicked_option === q.answer) {
            correct_answers++;
        };

        current_question++;
        show_question();
    };
};

function reset() {
    current_question = 0;
    correct_answers = 0;
    document.querySelector('.scoreArea').style.display = 'none';
    show_question();
};

function update_bar() {
    let pct = Math.floor((current_question / questions.length) * 100);

    document.querySelector('.progress--bar').style.width = `${pct}%`;
    console.log(pct)
};

show_question();
