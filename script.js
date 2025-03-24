let questionsArray = [
    { que: "What does HTML stand for?", opt1: "Hyper Text Preprocessor", opt2: "Hyper Text Markup Language", opt3: "Hyper Text Multiple Language", opt4: "Hyper Tool Multi Language", ans: "Hyper Text Markup Language" },
    
    { que: "Which CSS property is used to change text color?", opt1: "font-color", opt2: "text-color", opt3: "color", opt4: "background-color", ans: "color" },
    
    { que: "Which of the following is NOT a JavaScript framework?", opt1: "React", opt2: "Angular", opt3: "Django", opt4: "Vue", ans: "Django" },
    
    { que: "Which tag is used to link an external CSS file?", opt1: "<script>", opt2: "<link>", opt3: "<style>", opt4: "<css>", ans: "<link>" },
    
    { que: "Which JavaScript keyword is used to declare a variable?", opt1: "var", opt2: "let", opt3: "const", opt4: "All of the above", ans: "All of the above" },
    
    { que: "Which of these is a CSS framework?", opt1: "Bootstrap", opt2: "Node.js", opt3: "Express", opt4: "Django", ans: "Bootstrap" },
    
    { que: "What does DOM stand for?", opt1: "Document Object Model", opt2: "Data Object Model", opt3: "Document Oriented Model", opt4: "Display Object Management", ans: "Document Object Model" },
    
    { que: "Which of these is NOT a valid CSS unit?", opt1: "px", opt2: "em", opt3: "cm", opt4: "ptm", ans: "ptm" },
    
    { que: "Which HTML tag is used for creating an unordered list?", opt1: "<ul>", opt2: "<ol>", opt3: "<li>", opt4: "<list>", ans: "<ul>" },
    
    { que: "Which JavaScript function is used to print content to the console?", opt1: "console.log()", opt2: "print()", opt3: "document.write()", opt4: "log()", ans: "console.log()" }
];

let questionNumber = 0;
let correct = 0;
let incorrect = 0;
let isOptSelected = false;

function start(event) {
    console.log("Quiz started");
    event.target.style.display = "none";
    document.getElementById("box").style.display = "block";
    display();
}

function display() {
    if (questionNumber >= questionsArray.length) {
        alert(`Quiz Over! Your score is ${correct}/${questionsArray.length}`);
        resetQuiz();
        return;
    }

    let obj = questionsArray[questionNumber];
    document.getElementById("queId").innerText = obj.que;
    document.getElementById("opt1Id").innerText = obj.opt1;
    document.getElementById("opt2Id").innerText = obj.opt2;
    document.getElementById("opt3Id").innerText = obj.opt3;
    document.getElementById("opt4Id").innerText = obj.opt4;

    document.getElementById("queNoId").innerText = `${questionNumber + 1}/${questionsArray.length}`;
    
    resetOptions();
    isOptSelected = false;
}

function resetOptions() {
    let options = document.getElementsByClassName("opt");
    for (let i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = ""; // Reset color
    }
}

function checkAns(event, opt) {
    if (isOptSelected) return;  // Prevent multiple selections

    let obj = questionsArray[questionNumber];
    let selectedOption = document.getElementById(`opt${opt}Id`).innerText;

    if (selectedOption === obj.ans) {
        event.currentTarget.style.backgroundColor = "green";
        correct++;
    } else {
        event.currentTarget.style.backgroundColor = "red";
        incorrect++;
    }

    document.getElementById("correctId").innerText = correct;
    document.getElementById("inCorrectId").innerText = incorrect;
    isOptSelected = true;
}

function next() {
    if (!isOptSelected) {
        alert("Please select an option before proceeding.");
        return;
    }

    questionNumber++;
    display();
}

function resetQuiz() {
    questionNumber = 0;
    correct = 0;
    incorrect = 0;
    document.getElementById("correctId").innerText = 0;
    document.getElementById("inCorrectId").innerText = 0;
    document.getElementById("box").style.display = "none";
    document.getElementById("startBtn").style.display = "block";
}
