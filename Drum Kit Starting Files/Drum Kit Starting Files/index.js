for (let i = 0; i < document.querySelectorAll(".drum").length; i++)
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let press = this.innerHTML;
    makeCheck(press);
    animation(press)
  });

document.addEventListener("keypress", function (event) {
    makeCheck(event.key);
    animation(event.key);
});

const makeCheck = (press) => {
  switch (press) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
    //   var audio = new Audio("sounds/crash.mp3");
    //   audio.play();
    //   break;
    console.log("yash varshney");
  }
};

const animation=(key)=>{
let add = document.querySelector("."+key);
add.classList.add("pressed");
setTimeout(()=>{
    add.classList.remove("pressed"); 
},100);
}