
const questions = [
    {
        question: "1. What is an IP address?",
        options: [
            "A type of keyboard",
            "A network address used to identify a device",
            "An antivirus program",
            "A web browser"
        ],
        answer: 1
    },
    {
        question: "2. What is the full form of DNS?",
        options: [
            "Domain Name System",
            "Data Network Service",
            "Digital Name Security",
            "Domain Number Server"
        ],
        answer: 0
    },
    {
        question: "3. What does DNS do?",
        options: [
            "Deletes files",
            "Converts domain names into IP addresses",
            "Blocks all websites",
            "Creates passwords"
        ],
        answer: 1
    },
    {
        question: "4. What is a port?",
        options: [
            "A physical computer screen",
            "A logical communication endpoint",
            "A type of virus",
            "A storage device"
        ],
        answer: 1
    },
    {
        question: "5. Which port is commonly used by HTTPS?",
        options: [
            "21",
            "22",
            "80",
            "443"
        ],
        answer: 3
    },
    {
        question: "6. Which command displays Windows IP configuration?",
        options: [
            "ipconfig",
            "mkdir",
            "copy",
            "format"
        ],
        answer: 0
    },
    {
        question: "7. What is the purpose of the ping command?",
        options: [
            "To edit images",
            "To check basic network connectivity",
            "To delete a network",
            "To create a website"
        ],
        answer: 1
    },
    {
        question: "8. Which command can look up DNS information?",
        options: [
            "notepad",
            "nslookup",
            "paint",
            "tasklist"
        ],
        answer: 1
    },
    {
        question: "9. What is passive reconnaissance?",
        options: [
            "Collecting publicly available information without directly interacting with the target",
            "Damaging a computer",
            "Deleting network records",
            "Installing games"
        ],
        answer: 0
    },
    {
        question: "10. What is required before testing another person's system?",
        options: [
            "A fast computer",
            "A new browser",
            "Explicit permission",
            "A public Wi-Fi connection"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const progressElement = document.getElementById("progress");
const resultElement = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

function showQuestion() {
    answered = false;

    resultElement.textContent = "";
    nextBtn.hidden = true;
    restartBtn.hidden = true;

    const current = questions[currentQuestion];

    progressElement.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionElement.textContent = current.question;
    answersElement.innerHTML = "";

    current.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.textContent = option;
        button.className = "answer-btn";

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex, selectedButton) {
    if (answered) return;

    answered = true;

    const correctIndex = questions[currentQuestion].answer;
    const allButtons = answersElement.querySelectorAll("button");

    if (selectedIndex === correctIndex) {
        score++;
        resultElement.textContent = "Correct answer! Well done.";
    } else {
        resultElement.textContent =
            "Incorrect! Correct answer: " +
            questions[currentQuestion].options[correctIndex];
    }

    allButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }
    });

    if (selectedIndex !== correctIndex) {
        selectedButton.classList.add("wrong");
    }

    if (currentQuestion === questions.length - 1) {
        nextBtn.hidden = true;
        restartBtn.hidden = false;

        resultElement.textContent +=
            ` Final score: ${score}/${questions.length}`;
    } else {
        nextBtn.hidden = false;
    }
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

showQuestion();
