
lengthOfButtons = document.querySelectorAll(".drum").length;
for (var i=0;i<lengthOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
        changeButtonApp(buttonClicked);
    });
}

document.addEventListener('keydown', function (event){
    var keyPressed = event.key;
    makeSound(keyPressed);
    changeButtonApp(keyPressed);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            // alert('clicked w')
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            // alert('clicked a')
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            // alert('clicked s')
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            // alert('clicked d')
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            // alert('clicked j')
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            // alert('clicked k')
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            // alert('clicked l')
            break;
        default:
            alert("Oh, oo")
            break;
    }
}

function changeButtonApp(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 200)
}
