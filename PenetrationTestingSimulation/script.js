
function runScan() {
    const output = document.getElementById("scanResult");

    output.innerText =
        "Starting simulated vulnerability scan...\n\n" +
        "Target: training-lab.local\n" +
        "Port 22: SSH service detected (simulated)\n" +
        "Port 80: HTTP service detected (simulated)\n" +
        "Finding 1: Outdated software component\n" +
        "Finding 2: Weak password policy\n\n" +
        "Scan completed!\n" +
        "These are fictional training results.";
}

function simulateExploit() {
    const output = document.getElementById("exploitResult");

    output.innerText =
        "Starting safe exploitation demonstration...\n\n" +
        "Scenario: Outdated training application\n" +
        "Weakness: Old software component\n" +
        "Possible impact: Unauthorized access risk\n\n" +
        "Simulation completed successfully.\n" +
        "No real system was accessed or modified.";
}

// Quiz questions
const questions = [
    {
        question: "1. What is penetration testing?",
        options: [
            "Creating websites",
            "Testing system security with permission",
            "Deleting computer files",
            "Installing games"
        ],
        answer: 1
    },
    {
        question: "2. What is reconnaissance?",
        options: [
            "Collecting information about a target",
            "Deleting information",
            "Writing software",
            "Formatting a computer"
        ],
        answer: 0
    },
    {
        question: "3. Which tool can be used for virtualization?",
        options: [
            "Notepad",
            "Paint",
            "VirtualBox",
            "Calculator"
        ],
        answer: 2
    },
    {
        question: "4. What is vulnerability scanning?",
        options: [
            "Finding possible security weaknesses",
            "Creating passwords",
            "Editing images",
            "Playing videos"
        ],
        answer: 0
    },
    {
        question: "5. Who can authorize a penetration test?",
        options: [
            "Any stranger",
            "The system owner or authorized person",
            "Anyone online",
            "No one"
        ],
        answer: 1
    },
    {
        question: "6. What is exploitation?",
        options: [
            "Using a weakness to demonstrate its impact",
            "Updating a browser",
            "Creating a document",
            "Changing a wallpaper"
        ],
        answer: 0
    },
    {
        question: "7. Why should we isolate a virtual lab?",
        options: [
            "To increase screen brightness",
            "To protect other systems",
            "To delete the operating system",
            "To improve sound"
        ],
        answer: 1
    },
    {
        question: "8. What should be done after finding a vulnerability?",
        options: [
            "Ignore it",
            "Share it publicly without permission",
            "Report it and recommend a fix",
            "Delete the computer"
        ],
        answer: 2
    },
    {
        question: "9. What is a security patch?",
        options: [
            "A software update that fixes issues",
            "A computer game",
            "A network cable",
            "A web browser"
        ],
        answer: 0
    },
    {
        question: "10. What is the main rule of ethical hacking?",
        options: [
            "Test any website",
            "Work without permission",
            "Always obtain authorization",
            "Hide all activities"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    answered = false;

    const q = questions[currentQuestion];

    document.getElementById("progress").innerText =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    document.getElementById("question").innerText = q.question;
    document.getElementById("result").innerText = "";

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.innerText = option;
        button.className = "option";

        button.onclick = function () {
            checkAnswer(index, button);
        };

        optionsDiv.appendChild(button);
    });

    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("restartBtn").style.display = "none";
}

function checkAnswer(selected, selectedButton) {
    if (answered) return;

    answered = true;

    const correct = questions[currentQuestion].answer;
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach((button, index) => {
        button.disabled = true;

        if (index === correct) {
            button.classList.add("correct");
        }
    });

    if (selected === correct) {
        score++;
        document.getElementById("result").innerText =
            "Correct answer!";
    } else {
        selectedButton.classList.add("wrong");

        document.getElementById("result").innerText =
            "Incorrect! The correct answer is: " +
            questions[currentQuestion].options[correct];
    }

    if (currentQuestion < questions.length - 1) {
        document.getElementById("nextBtn").style.display = "inline-block";
    } else {
        document.getElementById("result").innerText +=
            "\n\nQuiz completed! Your score: " +
            score + " / " + questions.length;

        document.getElementById("restartBtn").style.display = "inline-block";
    }
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

loadQuestion();
