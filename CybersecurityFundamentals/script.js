
const questions = [
    {
        question: "1. What is cybersecurity?",
        answers: [
            "Protecting computers and data",
            "Creating websites",
            "Playing online games",
            "Designing applications"
        ],
        correct: 0
    },
    {
        question: "2. Who is known as an ethical hacker?",
        answers: [
            "Black Hat Hacker",
            "White Hat Hacker",
            "Cyber Criminal",
            "Attacker"
        ],
        correct: 1
    },
    {
        question: "3. What does CIA stand for in cybersecurity?",
        answers: [
            "Computer, Internet, Application",
            "Confidentiality, Integrity, Availability",
            "Control, Information, Access",
            "Cyber, Internet, Authentication"
        ],
        correct: 1
    },
    {
        question: "4. Which principle protects information from unauthorized access?",
        answers: [
            "Availability",
            "Integrity",
            "Confidentiality",
            "Authentication"
        ],
        correct: 2
    },
    {
        question: "5. What is malware?",
        answers: [
            "Security software",
            "Malicious software",
            "Operating system",
            "Web browser"
        ],
        correct: 1
    },
    {
        question: "6. What is phishing?",
        answers: [
            "A method of data backup",
            "A type of computer hardware",
            "A trick to steal sensitive information",
            "A programming language"
        ],
        correct: 2
    },
    {
        question: "7. What does ransomware do?",
        answers: [
            "Improves computer speed",
            "Encrypts or locks files and demands payment",
            "Creates strong passwords",
            "Removes all viruses"
        ],
        correct: 1
    },
    {
        question: "8. Which hacker accesses systems illegally for harmful purposes?",
        answers: [
            "White Hat Hacker",
            "Grey Hat Hacker",
            "Black Hat Hacker",
            "Security Researcher"
        ],
        correct: 2
    },
    {
        question: "9. Which CIA principle ensures data is accurate and unchanged without authorization?",
        answers: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Privacy"
        ],
        correct: 1
    },
    {
        question: "10. Which is a good cybersecurity practice?",
        answers: [
            "Sharing passwords",
            "Opening unknown links",
            "Using strong passwords",
            "Ignoring software updates"
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {
    answered = false;

    const q = questions[currentQuestion];

    document.getElementById("progress").textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("question").textContent = q.question;

    document.getElementById("result").textContent = "";

    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("restartBtn").style.display = "none";

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach(function (answer, index) {
        const button = document.createElement("button");

        button.textContent = answer;
        button.className = "answer-btn";

        button.onclick = function () {
            checkAnswer(index);
        };

        answersDiv.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (answered) {
        return;
    }

    answered = true;

    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(function (button, index) {
        button.disabled = true;

        if (index === q.correct) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && selectedIndex !== q.correct) {
            button.classList.add("wrong");
        }
    });

    if (selectedIndex === q.correct) {
        score++;
        document.getElementById("result").textContent =
            "Correct! Well done.";
    } else {
        document.getElementById("result").textContent =
            "Incorrect! The correct answer is: " + q.answers[q.correct];
    }

    document.getElementById("nextBtn").style.display = "inline-block";

    if (currentQuestion === questions.length - 1) {
        document.getElementById("nextBtn").textContent = "View Result";
    } else {
        document.getElementById("nextBtn").textContent = "Next Question";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("progress").textContent = "Quiz Completed!";

    document.getElementById("question").textContent =
        "You have completed the Cybersecurity Quiz.";

    document.getElementById("answers").innerHTML = "";

    document.getElementById("result").textContent =
        "Your Score: " + score + " / " + questions.length;

    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("restartBtn").style.display = "inline-block";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

showQuestion();
