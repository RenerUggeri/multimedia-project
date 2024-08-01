var topPosition = 0;
var leftPosition = 0;
var speed = 1000;

var ring = document.getElementById('ring');
ring.style.position = "absolute";
ring.addEventListener('click', explode); 

var moveRing = setInterval(ringMove, speed);

function ringMove() {
    leftPosition = Math.random() * (screen.availWidth - 100);
    topPosition = Math.random() * (screen.availHeight - 100);

    ring.style.left = leftPosition + "px";
    ring.style.top = topPosition + "px";

    if (leftPosition >= screen.availWidth - 200 || topPosition >= screen.availHeight - 200) {
        topPosition = 0;
        leftPosition = 0;
    }
}

function explode() {
    ring.src = "images/game-over.png";
    clearInterval(moveRing); 

    setTimeout(() => {
        alert("Congrats!!! You are now married!");
    }, 100); 
}
