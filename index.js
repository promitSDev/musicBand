function clickAlert(){
     var instrument=this.innerHTML;
     makeSound(instrument);
}

document.addEventListener("keydown",function(event){
   makeSound(event.key);
})

function makeSound(key){
    switch(key){
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            document.querySelector("footer").textContent="noiceeee";
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            document.querySelector("footer").textContent="lovely";
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            document.querySelector("footer").textContent="wowww";
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            document.querySelector("footer").textContent="let's have some beat";
            break;
        case 'j':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            document.querySelector("footer").textContent="beautiful";
            break;
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            document.querySelector("footer").textContent="hoorraayy";
            break;
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            document.querySelector("footer").textContent="excellent";
            break;
        default:
            document.querySelector("footer").textContent="oops you missed the drum"
     }
}

for(i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",clickAlert);
}

