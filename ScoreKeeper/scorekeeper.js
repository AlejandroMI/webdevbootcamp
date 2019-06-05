

var title = document.querySelector('h1');
var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var rButton = document.querySelector("#reset");
var display1 = document.querySelector('#d1');
var display2 = document.querySelector('#d2');
var numInput = document.querySelector("input");
var display3 = document.querySelector("#d3");
var score1 = 0;
var score2 = 0;
var gameOver = false;
var winningScore = 5;

//Logic

//Button 1 listener
p1Button.addEventListener("click", function(){

  if(gameOver==false){
    score1++;
    display1.textContent = score1;

    if(isOver()){
       display1.classList.add("winner");
    } //Chechk if some of the players has already achieve the ws and change the
     //color of the number
  }

});

//button 2 listener
p2Button.addEventListener("click", function(){

  if(gameOver==false){
    score2++;
    display2.textContent = score2;

    if(isOver()){
       display2.classList.add("winner");
    }
  }

});

//Button reset listener
rButton.addEventListener("click", function(){
  reset();
});

//Set the winning score
numInput.addEventListener("change", function(){

    reset();
    display3.textContent = this.value;
    winningScore = Number(this .value);

});

//Some practice with other events
title.addEventListener("mouseover",function(){
  title.classList.toggle("hover");
});
title.addEventListener("mouseout",function(){
  title.classList.toggle("hover");
});

//If we take some elements like a bunch of li we have to remember to select
//a querySelectorAll and then use a loop for to add the listener to every
//element using the word THIS. 

//FUNCTIONS

function isOver(){
  if(score1 === winningScore ||  score2 === winningScore){
    gameOver = true;
    return true;
  }
}

function reset(){
  score1 = 0;
  score2 = 0;
  display1.textContent = score1;
  display2.textContent = score2;
  display1.classList.remove("winner");
  display2.classList.remove("winner");
  gameOver = false;
}
