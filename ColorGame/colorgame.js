
  //-------COLOR FUNCTIONS--------//

  function randomColor(){
    //Pick a red from 0 to 255
    var r = Math.floor(Math.random()* 256);
    //Pick a green from 0 to 255
    var g = Math.floor(Math.random()* 256);
    //Pick a blue from 0 to 255
    var b = Math.floor(Math.random()* 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  //Generate random colors for the game
  function generateRandomColors(num){
    //Create an array
    var arr = [];
    //Add num colors to this array
    for (var i = 0; i < num; i++) {
      arr.push(randomColor());
    }
    //Return this array for the game
    return arr;
  }

  //Pick a random color of the generated
  function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
  }


  //_______________ MAIN FUNCTIONS _____________ //

  //START GAME
    //We call the function to generate 6 random colors
    var colors = generateRandomColors(6);
    //Now we call the DOM to get our 6 cirlces
    var circles = document.getElementsByClassName('circles');
    //We choose one of the generated colors as the good one
    var pickedColor = pickColor();
    //We update the title with the color choosen and create an object for the message
    var colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.textContent = pickedColor.slice(3,pickedColor.length); //Get rid of the RGB
    var messageDisplay = document.getElementById('message')
    //We fill the circles with our array of random colors and add EventListeners
    for (var i = 0; i < circles.length; i++) {
      //Add initial colors
      circles[i].style.backgroundColor  = colors[i];
      //add click listeners
      circles[i].addEventListener("click", clickColor);
    }

  //RESET
  var resetButton = document.getElementById('reset');

  resetButton.addEventListener("click", function(){
    //Set button text
    resetButton.textContent = "New Colors"
    //We call the function to generate 6 random colors
    colors = generateRandomColors(6);
    //We choose one of the generated colors as the good one
    pickedColor = pickColor();
    //We update the title with the color choosen and create an object for the message
    colorDisplay.textContent = pickedColor.slice(3,pickedColor.length); //Get rid of the RGB
    //We fill the circles
    for (var i = 0; i < circles.length; i++) {
      //Add initial colors
      circles[i].style.backgroundColor  = colors[i];
    }
    //Reset color display color
    colorDisplay.style.color = "black";
  })

  //Every time a color is clicked we call this function:
  function clickColor(){
    //Grab color of clicked square
     var clickedColor = this.style.backgroundColor;

    //Check if matches with the color selected
    if(pickedColor === clickedColor){
      messageDisplay.textContent = "Correct";
      changeAllColors();
      resetButton.textContent = "Play Again?";
    }else{
      this.style.backgroundColor ="white";
      messageDisplay.textContent = "Try Again!";
    }
  }

  //Turn all circles  and colorDisplay to the color selected
  function changeAllColors(){
      //for the colorDisplay
      colorDisplay.style.color = pickedColor;
     //loop through all the cirlces
     for (var i = 0; i < circles.length; i++) {
       //Change them for the correct one
       circles[i].style.backgroundColor = pickedColor;
     }
  }

  //HARD AND EASY
  var hardButton = document.querySelector("#hardButton");
  var easyButton = document.querySelector("#easyButton");

  hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
  });
  easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    //create threee Colors
    //Pick color
    //change colorDisplay
    //Hide bottom line 
  });
