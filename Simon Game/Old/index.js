buttons = document.querySelectorAll(".box");
buttonColors = ["red", "blue", "green", "yellow"]
gamePattern = [];

function nextSequence(){
  randomNumber = Math.floor(Math.random() * 4);
  randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
  console.log(gamePattern);
}

document.addEventListener("click", function(){
  nextSequence();
})



























// End
