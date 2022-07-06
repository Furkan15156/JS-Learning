var btnList = document.querySelectorAll(".drum");
for (var i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener("click", function(){
      makeSound(this.innerHTML);
      shadowFunction(this.innerHTML);
  });
}

document.addEventListener("keydown", function(){
  makeSound(event.key) ;
  shadowFunction(event.key);
    });

function makeSound(key) {

  switch (key) {
      case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
        break;

      case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
        break;

      case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
        break;

      case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
        break;

      case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
        break;

      case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
        break;

      case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
        break;

    default:

  }

}

var shadowFunction = function (addShadow) {
  document.querySelector("." + addShadow).classList.add("pressed");
    setTimeout(function(){
      document.querySelector("." + addShadow).classList.remove("pressed");
    }, 100);
}
