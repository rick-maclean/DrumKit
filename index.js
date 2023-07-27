
function handleClick(){
    alert("drum project I got clicked ");
}


// for (var i = 0; i<drumButtons.length; i++) {
//     drumButtons[i].addEventListener(
//                     "click", 
//                     function(){
//                         alert("drum project I got clicked ");
//                     }
//     );
// }

var drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(function(drumItem){
    addAlert(drumItem);
});

function addAlert(item) {
    //alert("the text for this button is "+item.innerHTML);
    var soundfile = "";
    switch(item.innerHTML) {
        case "w":
            soundfile = "sounds/crash.mp3";
        // code block
        break;
        case "a":
            soundfile = "sounds/kick-bass.mp3";
        // code block
        break;
        case "s":
            soundfile = "sounds/snare.mp3";
        // code block
        break;
        case "d":
            soundfile = "sounds/tom-1.mp3";
        // code block
        break;
        case "j":
            soundfile = "sounds/tom-2.mp3";
        // code block
        break;
        case "k":
            soundfile = "sounds/tom-3.mp3";
        // code block
        break;
        case "l":
            soundfile = "sounds/tom-4.mp3";
        // code block
        break;
        default:
            soundfile = "sounds/tom-1.mp3";
        
      }
    item.addEventListener(
        "click", 
        function(){
            var audio = new Audio(soundfile);
            audio.play();
        }
    );
    //alert(item);
  }

//   drumButtons[0].addEventListener(
//     "click", 
//     function(){
//         var audio = new Audio('sounds/crash.mp3');
//         audio.play();
//     }
// );

// function addSound(soundFileName){
//     var audio = new Audio(soundFileName);
//     audio.play();
// }

//alert(drumButtons[0].innerHTML);

 

//   calulator funtions
function add (num1, num2){
    return num1 + num2;
}
function subtract (num1, num2){
    return num1 - num2;
}
function div (num1, num2){
    return num1 / num2;
}
function mult (num1, num2){
    return num1 * num2;
}
function calc(num1, num2, operator) {
    return operator(num1, num2)
}