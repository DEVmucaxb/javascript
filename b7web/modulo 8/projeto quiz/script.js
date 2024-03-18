//Initial Data
let current_question = 0;
let correct_answers = 0;

show_question();

//Events
document.querySelector('.scoreArea button').addEventListener('click', reset);

//Functions
function show_question() {
    let q = questions[current_question];
    let pct = Math.floor((current_question / questions.length) * 100);
    document.querySelector('.progress--bar').style.width = `${pct}%`;

    if (q) {
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';
        document.querySelector('.question').innerHTML = q.question;


        let options_html = '';

        for (let i in q.options) {
            options_html += `<div data-op="${i}" class="option"><span>${Number(i) + 1}</span> ${q.options[i]}</div>`;
        };

        document.querySelector('.options').innerHTML = options_html;

        document.querySelectorAll('.options').forEach((item) => {
            item.addEventListener('click', option_item_event);
        });

    } else {
        //acabaram as questões
        finish_quiz();
    };
};

function option_item_event(e) {
    let clicked_option = Number(e.target.getAttribute('data-op'));

    if (questions[current_question].answer === clicked_option) {
        correct_answers++;
    };

    current_question++;
    show_question();
};

function finish_quiz() {
    let points = Math.floor((correct_answers / questions.length) * 100);

    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';

    document.querySelector('.scoreArea .scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreArea .scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correct_answers}.`;

    if (points <= 30) {
        document.querySelector('.scoreText1').innerHTML = 'Tá ruim ein...';
        document.querySelector('.scorePct').style.color = 'red';
    } else if (points <= 70) {
        document.querySelector('.scoreText1').innerHTML = 'Bom';
        document.querySelector('.scorePct').style.color = 'yellow';
    } else {
        document.querySelector('.scoreText1').innerHTML = 'Parabéns';
        document.querySelector('.scorePct').style.color = 'green';
    };
};

function reset() {
    current_question = 0;
    correct_answers = 0;
    show_question();
};