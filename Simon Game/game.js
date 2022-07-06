buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userPattern = [];

      // gamePattern'ın tamamı oyuncuya gösterilir.
// function nextSequence() {
//   randomNumber = Math.floor(Math.random() * 4);
//   randomChoosenColor = buttonColors[randomNumber];
//   gamePattern.push(randomChoosenColor);
//   let i = 0;
//   let delay = setInterval(function() {
//     color = gamePattern[i];
//     $("." + color).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
//     playSound(color);
//     if (i === gamePattern.length - 1) {
//       clearInterval(delay);
//     } i++; }, 800); console.log(gamePattern);
//   $("#level-title").html("Level " + gamePattern.length);
// }

        // gamePattern'a son eklenen eleman oyuncuya gösterilir.
function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
    $("." + randomChoosenColor).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
    playSound(randomChoosenColor);
    console.log(gamePattern);
  $("#level-title").html("Level " + gamePattern.length);
}

$(".btn").click(function() {
  var userChosenColor = this.id;
  userPattern.push(userChosenColor);
  console.log(userPattern);
  pressed(userChosenColor);
  playSound(userChosenColor);
});

function pressed(press) {
  $("#" + press).addClass("pressed");
  setTimeout(function() {
    $("#" + press).removeClass("pressed");
  }, 200)
}

function gameOver() {
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200)
}

function playSound(sound) {
  var audio = new Audio("sounds/" + sound + ".mp3");
  audio.play();
}

function restart(){
  window.location.href = window.location.href;
}

function compare(){
  if (gamePattern.length>userPattern.length) {
    for (var i = 0; i < userPattern.length; i++) {
      if (gamePattern[i]===userPattern[i]) {
      } else {
          playSound("wrong");
          gameOver();
          setTimeout(function(){
            restart();
          },500)
      }
    }
  } else if (gamePattern.length===userPattern.length) {
    for (var i = 0; i < userPattern.length; i++) {
      if (gamePattern[i]===userPattern[i]) {
      } else {
        playSound("wrong");
        gameOver();
        setTimeout(function(){
          restart();
        },500)
        }
    }
    setTimeout(function(){
      nextSequence();
    },500)
    userPattern.length = 0;
  }
}

function game(){
  nextSequence();
  $("html").click(compare);
}

$("html").one("keydown", game);




















// End
