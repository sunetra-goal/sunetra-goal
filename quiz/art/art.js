const quizData = [
    {
        question: "Mandu festival, which was making news recently, is celebrated in which state?",
        a: "Gujarat",
        b: "Madhya Pradesh",
        c: "Andra Pradesh",
        d: "Odisha",
        correct: "b",
    },
    {
        question: "Which Union Ministry is to organise an event named ‘Mushaira’, in which poets across the country recite their poems?",
        a: "Ministry of Education",
        b: "Ministry of Culture",
        c: "Ministry of Minority Affairs",
        d: "Ministry of External Affairs",
        correct: "c",
    },
    {
        question: "‘Pahela Phagun’, the spring festival, is celebrated in which country?",
        a: "India",
        b: "Bangladesh",
        c: "Nepal",
        d: "Myanmar",
        correct: "a",
    },
    {
        question: "Which Indian state hosts the famous ‘Khajuraho Dance Festival’?",
        a: "Odisha",
        b: "West Bengal",
        c: "Madhya Pradesh",
        d: "Chhattisgarh",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})