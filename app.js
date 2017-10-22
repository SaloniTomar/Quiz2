function populate(){
    if(quiz.isEnded()){
        showScore();
    }
    else{
        //show Question()
        var element= document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;

        var choices= quiz.getQuestionIndex().choice;
        for (var i = 0; i < choices.length; i++) {
          var element=document.getElementById("option"+i);
          element.innerHTML=choices[i];
          guess("btn"+i, choices[i]);
        }
        showProgress();
    }
}

function guess(id,guess){
  var button=document.getElementById(id);
  button.onclick=function(){
    quiz.guess(guess);
    populate();
  }
}
function showProgress(){
  var currentQuestionNumber=quiz.questionIndex + 1;
  var element=document.getElementById("progress");
  element.innerHTML="Question "+ currentQuestionNumber+" of "+quiz.questions.length;
}
function showScore(){
  var gameOverHtml="<h1>Result</h1>";
  gameOverHtml+="<h2 id='score'>Your scores:"+quiz.score+"</h2>";
  var element=document.getElementById("quiz");
  element.innerHTML=gameOverHtml;
}
var questions=[
    new Question( "1. Inside which HTML element do we put the JavaScript?", ["javascript","scripting","script","js"], "script"),
    new Question( "2. Where is the correct place to insert a JavaScript?", ["In the body","Head", "Body or head", "Nowhere"], "Body or head"),
    new Question( "3. How do you create a function in JavaScript?", ["function:myFunction()","function myFunction", "function=myFunction", "function = new myFunction"], "function myFunction"),
    new Question( "4. How to write an IF statement in JavaScript?",["if i == 5 then","if (i == 5)","if i = 5"," if i = 5 then"], "if (i == 5)"),
    new Question( "5. How can you add a comment in a JavaScript?",["<--This is a comment-->","'This is a comment","//This is a comment","<--This is a comment"],"//This is a comment")
];

var quiz= new Quiz(questions);

populate();
