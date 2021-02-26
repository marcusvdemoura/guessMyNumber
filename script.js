"use strict";

// WHAT IS THE DOM?

/*

DOM (or Document Object Model) is a structured representation of HTML Documents.
Allows JS to access HTML elements and styles to manipulate them.
We can change text, HTML Attributes and CSS styles

DOM !== JAVASCRIPT

*/

console.log(document.querySelector(".message").textContent);

//changing text element from JS

/*
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value=23;

console.log(document.querySelector('.guess').value);
*/

// EVENT LISTENER

/*
an event listener needs an event handler to be executed.
this event handler is the function passed as a parameter as bellow:
event handler means (what will be executed when the event listener - click
on the button happens) 
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const changingContent = (item, message) => {
  return document.querySelector(item).textContent = message;
}


// When btn 'check' is clicked.
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (guess === secretNumber) {
    console.log("Congrats! " + guess + " " + typeof guess);
  }
  // When there's no input
  if (!guess) {
    changingContent(".message", "⛔ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    changingContent(".message", "🎉 Correct Number!!");
    //whenever specifying a style, we need to use a string:
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      changingContent(".highscore",  highScore);
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      changingContent(".message", 
        guess > secretNumber ? "🔼    Too High" : "🔻  Too Low");
      score--;
      changingContent(".score",  score);
    } else {
      changingContent(".message", "😞 You lost the game!");
      changingContent(".score",  0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  console.log("Event: again btn clicked");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changingContent(".message", "Start Guessing...");
  changingContent(".number", "?");
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
