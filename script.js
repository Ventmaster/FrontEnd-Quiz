const data = [
    {
        question: "Which of the following is/are the levels of implementation of data structure",
        a: "Abstract Level",
        b: "Application Level",
        c: "Implementation Level",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "A binary search tree whose left subtree and right subtree differ in height by at most 1 unit is called",
        a: "AVL tree",
        b: "Red-Black tree",
        c: "Lemme tree",
        d: "None of the Above",
        correct: "a",
    },
    {
        question: "Stack is also called as",
        a: "Last in first out",
        b: "First in last out",
        c: "Last in last out",
        d: "First in first out",
        correct: "a",
    },
    {
        question: "Which of the following is not the part of ADT Description?",
        a: "Data",
        b: "Operations",
        c: "Both of the above",
        d: "None of the above",
        correct: "d",
    },
    {
        question: "Which data structure allows deleting data elements from and inserting at rear",
        a: "Stacks",
        b: "Queues",
        c: "Dequeues",
        d: "Binary Search Tree",
        correct: "b",
    },
    {
        question: "Which of the following data structure can't store the non-homogenous data elements?",
        a: "Arrays",
        b: "Records",
        c: "Pointers",
        d: "Stacks",
        correct: "a",
    },
    {
        question: "Which of the following is a non-linear data structure?",
        a: "Stacks",
        b: "List",
        c: "Strings",
        d: "Trees",
        correct: "d",
    },
    {
        question: "Herder node is used as sentinel in?",
        a: "Graphs",
        b: "Stacks",
        c: "Binary tree",
        d: "Queues",
        correct: "d"
    },
    {
        question: "The number of comparisions done by sequential search is",
        a: "(N+2)/1",
        b: "(N+1)/2",
        c: "(N-1)/2",
        d: "(N+2)/2",
        correct: "b",
    },
    {
        question: "In __________, search starts at the beginning of the list and check every element in the list",
        a: "Linear Search",
        b: "Binary Search",
        c: "Hash Search",
        d: "Binary Tree search",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answer1 = document.querySelectorAll(".answer");
const question1 = document.getElementById("question");

const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = data[currentQuiz];

    question1.innerText = currentQuizData.question;
    optionA.innerText = currentQuizData.a;
    optionB.innerText = currentQuizData.b;
    optionC.innerText = currentQuizData.c;
    optionD.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answer1.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer = undefined;

    answer1.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitButton.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === data[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < data.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${data.length} questions correctly</h2>
                <button onclick="location.reload()">DO IT AGAIN!</button>
            `;
        }
    }
});


function showResults() {
  quiz.innerHTML = `
    <h2>You answered ${score}/${data.length} questions correctly</h2>
    <button onclick="location.reload()">DO IT AGAIN!</button>
  `;
}


// END OF Script.JS FILE

// Feel Free to add more questions and make suggestions and improvements 
// :) 