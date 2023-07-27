
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener(
        "click",
        function() {
            var soundfile = whichSoundFile(this.innerHTML);
            var audio = new Audio(soundfile);
            audio.play();
            buttonAnimation(this.innerHTML);
        }

    );
}


//Note the keys don't need to be associated with any particular html element
//so it can just be added to the document for keydown.
document.addEventListener("keydown", function(event) {
    // do something when the keydown event is fired
    console.log(`Key ${event.key} was pressed`);
    var soundfile = whichSoundFile(event.key);
        var audio = new Audio(soundfile);
        audio.play();
        buttonAnimation(event.key);
  });

// var drumButtons = document.querySelectorAll(".drum");

// drumButtons.forEach(function(drumItem){
//     showKeyPressed(drumItem);
// });

// function showKeyPressed(item) {
//     item.addEventListener("keydown", function(event) {
//         // do something when the keydown event is fired
//         console.log(`Key ${event.key} was pressed`);
//         var soundfile = whichSoundFile(event.key);
//             var audio = new Audio(soundfile);
//             audio.play();
//       });
//   }


function buttonAnimation(keyPressed) {
    var activeButton = document.querySelector("." + keyPressed);
    // var drumButtons = document.querySelectorAll(".drum")
    // drumButtons.forEach(function(drumItem){drumItem.classList.remove("pressed");});
    //console.log(activeButton);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 200);
    //console.log(activeButton);
    //activeButton.classList.remove("pressed");
}

  function whichSoundFile (char) {
    var soundfile = "";
    switch(char) {
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
        case "1":
        case "2":
        case "u":
        case "p":
            soundfile = "sounds/squeaky-toy-2-44491.mp3"; 
        // code block
        break;
        default:
            soundfile = "sounds/bicycle-horn-7126.mp3";
      }
      return soundfile;
  }