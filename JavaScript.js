function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}


function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("מה שמו של הפטיש של תור?", ["וניר", "מיולניר", "אייסיר", "נורן"], "מיולניר"),
    new Question("ממה עשוי המגן של קפטן אמריקה??", ["אדמנטיום", "ויברניום", "פרומתיום", "קרבונדיום"], "ויברניום"),
    new Question("הפלקרנים הם גזע של חייזרים מסוכנים ביותר הדומה למה?", ["חתולים ", "ברווזים", "זוחלים", "דביבונים"], "חתולים"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),


];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();


/*-------------Timer----------------*/ 
setInterval(TimerFun, 1000);
var maxTime = 10;
var timeRemain = maxTime * 60;

function TimerFun() {
    var countDown = document.getElementById('Timer');
    var minutes = Math.floor(timeRemain / 60);
    var seconds = timeRemain % 60;

    if (seconds < 10)
        seconds = '0' + seconds;

    if (minutes < 10) {
        countDown.innerText = '0' + minutes + ':' + seconds;
    } else {
        countDown.innerText = minutes + ':' + seconds;
    }
    timeRemain--;

    if (timeRemain < -2) {
        countDown.innerText = 'הזמן נגמר';
    }
}