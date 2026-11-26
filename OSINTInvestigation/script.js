
function investigate() {
    const category = document.getElementById("category").value;
    const output = document.getElementById("investigationResult");

    const findings = {
        website:
            "WEBSITE INVESTIGATION\n\n" +
            "Target: example.org\n" +
            "Finding: Public example website identified.\n" +
            "Source: Public website documentation.\n" +
            "Status: Sample result.",

        domain:
            "DOMAIN INVESTIGATION\n\n" +
            "Target: example.org\n" +
            "Finding: Domain information can be checked through public DNS records.\n" +
            "Tool: nslookup example.org\n" +
            "Status: Sample result.",

        social:
            "PUBLIC SOCIAL MEDIA INVESTIGATION\n\n" +
            "Target: Fictional organization\n" +
            "Finding: Public organizational profiles may provide useful information.\n" +
            "Important: Do not collect private account information.\n" +
            "Status: Sample result.",

        security:
            "SECURITY INFORMATION\n\n" +
            "Target: example.org\n" +
            "Finding: Public security documentation may describe security practices.\n" +
            "Recommendation: Verify findings using trusted sources.\n" +
            "Status: Sample result."
    };

    output.innerText = findings[category];
}

// Download investigation report
function downloadReport() {
    const report =
        "OSINT INVESTIGATION REPORT\n\n" +
        "Target: Example Training Organization\n" +
        "Investigation Type: Educational OSINT Demonstration\n\n" +
        "Finding 1: Public example website identified.\n" +
        "Finding 2: Domain information can be reviewed using public DNS records.\n" +
        "Finding 3: Public information should be verified.\n\n" +
        "Conclusion:\n" +
        "OSINT helps security professionals understand publicly available information.\n\n" +
        "Ethical Note: This report uses fictional sample findings.";

    const blob = new Blob([report], {
        type: "text/plain"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "OSINT_Investigation_Report.txt";

    link.click();

    URL.revokeObjectURL(link.href);
}

// Quiz
const questions = [
    {
        question: "1. What does OSINT stand for?",
        options: [
            "Open Source Intelligence",
            "Online Security Internet Network",
            "Operating System Internal Network",
            "Open System Information Technology"
        ],
        answer: 0
    },
    {
        question: "2. What is a digital footprint?",
        options: [
            "A computer virus",
            "Information left through online activities",
            "A network cable",
            "A password"
        ],
        answer: 1
    },
    {
        question: "3. Which is an example of a public information source?",
        options: [
            "Private messages",
            "Stolen accounts",
            "Public websites",
            "Private passwords"
        ],
        answer: 2
    },
    {
        question: "4. What is the purpose of OSINT?",
        options: [
            "Collecting and analyzing public information",
            "Hacking private accounts",
            "Deleting databases",
            "Stealing passwords"
        ],
        answer: 0
    },
    {
        question: "5. Which tool can check public DNS information?",
        options: [
            "Paint",
            "Calculator",
            "nslookup",
            "Notepad"
        ],
        answer: 2
    },
    {
        question: "6. Why should evidence be verified?",
        options: [
            "To avoid incorrect conclusions",
            "To hide information",
            "To delete files",
            "To change passwords"
        ],
        answer: 0
    },
    {
        question: "7. What is a domain name?",
        options: [
            "A computer screen",
            "A website's human-readable address",
            "A keyboard",
            "A file extension"
        ],
        answer: 1
    },
    {
        question: "8. What should an ethical OSINT investigator respect?",
        options: [
            "Privacy and applicable laws",
            "Unauthorized access",
            "Password theft",
            "Private account bypass"
        ],
        answer: 0
    },
    {
        question: "9. What should an investigation report contain?",
        options: [
            "Only guesses",
            "Verified findings and sources",
            "Private passwords",
            "Unrelated information"
        ],
        answer: 1
    },
    {
        question: "10. Can OSINT require breaking into private accounts?",
        options: [
            "Yes",
            "Always",
            "No",
            "Only at night"
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
            "Incorrect! Correct answer: " +
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
