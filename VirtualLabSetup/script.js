
const questions = [
    {
        question: "1. What is a Virtual Lab?",
        options: [
            "A gaming application",
            "A controlled computer environment for practice",
            "A social media platform",
            "An antivirus program"
        ],
        answer: 1
    },
    {
        question: "2. What is Kali Linux mainly used for?",
        options: [
            "Video editing",
            "Gaming",
            "Cybersecurity testing and research",
            "Word processing"
        ],
        answer: 2
    },
    {
        question: "3. What is Virtualization?",
        options: [
            "Creating virtual computers on a physical computer",
            "Deleting computer files",
            "Creating websites",
            "Installing mobile applications"
        ],
        answer: 0
    },
    {
        question: "4. Which software can create Virtual Machines?",
        options: [
            "Notepad",
            "Paint",
            "Oracle VirtualBox",
            "Calculator"
        ],
        answer: 2
    },
    {
        question: "5. What does VM stand for?",
        options: [
            "Visual Memory",
            "Virtual Machine",
            "Verified Mode",
            "Virtual Monitor"
        ],
        answer: 1
    },
    {
        question: "6. What is a snapshot?",
        options: [
            "A saved state of a Virtual Machine",
            "A computer virus",
            "A password",
            "A network cable"
        ],
        answer: 0
    },
    {
        question: "7. Why use a controlled environment?",
        options: [
            "To damage computers",
            "To practise more safely",
            "To steal information",
            "To disable security"
        ],
        answer: 1
    },
    {
        question: "8. What should you check before creating a VM?",
        options: [
            "Wallpaper",
            "Social media",
            "RAM, processor and storage",
            "Browser history"
        ],
        answer: 2
    },
    {
        question: "9. Where should you download Kali Linux?",
        options: [
            "Unknown websites",
            "Official Kali Linux website",
            "Random advertisements",
            "Untrusted links"
        ],
        answer: 1
    },
    {
        question: "10. When is ethical hacking allowed?",
        options: [
            "On any website",
            "Without permission",
            "Only on authorized systems",
            "On public computers without approval"
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
            "Incorrect! The correct answer is: " +
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
        resultElement.textContent += ` Final score: ${score}/${questions.length}`;
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
