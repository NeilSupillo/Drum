let buttonLength = document.querySelectorAll('.drum').length;

/*adding event listener*/
for (let i = 0; i < buttonLength; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", identifyKey);
}

/*when button is click*/
function identifyKey() {
  const keyChar = this.innerHTML;
  play(keyChar);
  animate(keyChar);
}

/*when keyboard is pressed*/
document.addEventListener("keypress", function(event) {
  
let i = 0;
const key = event.key;
let char = ['a','s','d','w','j','k','l'];
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
       audio = new Audio('crash.mp3');
      audio.play();
      break;

    case "s":
       audio = new Audio('techgate.wav');
      audio.play();
      break;

    case "d":
       audio = new Audio('ex1_src1.wav');
      audio.play();
      break;

    case "w":
       audio = new Audio('lohnstrm.wav');
      audio.play();
      break;

    case "j":
       audio = new Audio('crash.mp3');
      audio.play();
      break;

    case "k":
       audio = new Audio('28-foot closed hat.wav');
      audio.play();
      break;

    case "l":
       audio = new Audio('kick-bass.mp3');
      audio.play();
      break;

    default:
  };
}


function animate(keyChar) {

  
   key = document.querySelector("." + keyChar);
  key.classList.add("pressed");

  setTimeout(function() {
    key.classList.remove("pressed");
  }, 100);

}