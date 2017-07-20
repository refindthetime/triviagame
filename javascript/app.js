var panel = $("#quiz-location");

// Questions and answers
var questions = [{
  question: "1.When Was Jim Carrey Born?",
  answers: ["July 27, 1962.", "September 1, 1954.", "January 17, 1962.", "June 7, 1977."],
  correctAnswer: "January 17, 1962."
}, {
  question: "2.What is Jim Carrey's full name?",
  answers: ["James Eugene Carrey.", "John Sylvester Carrey.", "Jimmy Bruce Carrey.", "Jim Ventura Carrey"],
  correctAnswer: "James Eugene Carrey."
}, {
  question: "3.Which character was not played by Jim Carrey?",
  answers: ["<img src = image/grinch.gif alt= Grinch width= 100px height= 100px></img>", "<img src = image/hulk.gif alt= Hulk width= 100px height= 100px></img>", "<img src = image/mask.gif alt= Mask width= 100px height= 100px></img>", "<img src = image/riddler.gif alt= Riddler width= 100px height= 100px></img>"],
  correctAnswer: "<img src = image/hulk.gif alt= Hulk width= 100px height= 100px></img>"
}, {
  question: "4.How many Ocsars has Jim Carrey been awarded?",
  answers: ["5.", "10.", "More than  Leonardo DiCaprio.", "Less than  Leonardo DiCaprio."],
  correctAnswer: "Less than  Leonardo DiCaprio."
}];

// setInterval variable here
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      
      game.done();
    }
  },
//timer function once start is commenced
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<br><br> <button id='done'>Done</button>");
  },
//check responses here
  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// start click event and done

$(document).on("click", "#start", function() {
  game.start();

});


$(document).on("click", "#done", function() {
  game.done();
});