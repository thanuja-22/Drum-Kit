var buttons = document.querySelectorAll(".drum");

//Adding click and mouseenter listeners to buttons
for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", handleClick);
  buttons[i].addEventListener("mouseenter", handleMove);
}

//Adding keydown listeners to buttons ---  callBack functions
document.addEventListener("keydown", handleKey);

// Handing click, mouseenter, keypress
function handleClick() {
  buttonAnimation(this.innerHTML);
  mySwitch(this.innerHTML);
}

function handleMove() {
  buttonAnimation(this.innerHTML);
  mySwitch(this.innerHTML);
}

function handleKey(event) {
  var my_audio;
  buttonAnimation(event.key);
  mySwitch(event.key);
}

// Sound Selection
function mySwitch(key) {
  switch (key) {

    case "w":
      my_audio = new Audio("sounds/tom-1.mp3");
      my_audio.play();
      break;

    case "a":
      my_audio = new Audio("sounds/tom-2.mp3");
      my_audio.play();
      break;

    case "s":
      my_audio = new Audio("sounds/tom-3.mp3");
      my_audio.play();
      break;

    case "d":
      my_audio = new Audio("sounds/tom-4.mp3");
      my_audio.play();
      break;

    case "j":
      my_audio = new Audio("sounds/snare.mp3");
      my_audio.play();
      // activeButton.classList.remove("pressed");
      break;

    case "k":
      my_audio = new Audio("sounds/crash.mp3");
      my_audio.play();
      break;

    case "l":
      my_audio = new Audio("sounds/kick-bass.mp3");
      my_audio.play();
      break;
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed");},30);
}
