
var numberOfDrumButtons = document.querySelectorAll(".drum").length;  //.length returns the no. of queries selected.
for(let i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        playAudio(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
}

document.addEventListener("keydown", function(event){
    playAudio(event.key);
    buttonAnimation(event.key)
});

function playAudio(key){
    switch(key){
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
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key);
    }
}

function buttonAnimation(event){
    var activeButton = document.querySelector("."+ event);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    });
}


//mini calculator

// function add(num1, num2){
//     return num1 + num2;
// }
// function sub(num1, num2){
//     return num1 - num2;
// }
// function div(num1, num2){
//     return num1 / num2;
// }
// function mul(num1, num2){
//     return num1 * num2;
// }

// function calculator(num1, num2, operation){
//     return operation(num1, num2);
// }


// this.style.color="white"; this --> it refers to an object
