var buttonLength = document.querySelectorAll('.drum').length;

/*adding event listener*/
for (var i = 0; i < buttonLength; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", identifyKey);
}

/*when button is click*/
function identifyKey() {
  var keyChar = this.innerHTML;
  play(keyChar);
  animate(keyChar);
}

/*when keyboard is pressed*/
document.addEventListener("keypress", function(event) {
  
var i = 0;
var key = event.key;
var char = ['a','s','d','w','j','k','l'];
while(char[i] !== key && i < char.length){
  i++;
}

if(char[i] === key){
  play(event.key);
    animate(event.key);
}
    

});

// play key //
function play(keyChar) {
  switch (keyChar) {
    case "a":
      var audio = new Audio('/sounds/crash.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('/sounds/techgate.wav');
      audio.play();
      break;

    case "d":
      var audio = new Audio('/sounds/ex1_src1.wav');
      audio.play();
      break;

    case "w":
      var audio = new Audio('/sounds/lohnstrm.wav');
      audio.play();
      break;

    case "j":
      var audio = new Audio('/sounds/crash.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('/sounds/28-foot closed hat.wav');
      audio.play();
      break;

    case "l":
      var audio = new Audio('/sounds/kick-bass.mp3');
      audio.play();
      break;

    default:
  };
}

function animate(keyChar) {

  
  var key = document.querySelector("." + keyChar);
  key.classList.add("pressed");

  setTimeout(function() {
    key.classList.remove("pressed");
  }, 100);

}