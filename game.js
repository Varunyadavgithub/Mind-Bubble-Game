let timer=60;
let score=0;
let hitrn=0;
let hScore=0;

/* jispe click karoge wo element par event raise hoga, 
aur event listener na milne par event element ke parent 
par listener dhundhega, waha bhi na milne par event 
parent ke parent ke parent par listener dhundhega */
document.querySelector(".pbtm").addEventListener("click", function(details){
    let clickedNumber = Number(details.target.textContent);
    if(clickedNumber === hitrn){
        increseScore();
        makeBubble();
        getNewHit();
        heighScore();
    }
});

// Show the high score of a game...
function heighScore(){
    hScore += 10;
    document.querySelector("#highscoreval").textContent = hScore;
}


// Increse the score by 10 when user hit the right bubble on screen...
function increseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// Every time get new value, which the user hit to play the game...
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

// Show the 60sec timer on screen...
function runTimer(){
    let interval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(interval);
            document.querySelector(".pbtm").innerHTML= `<h1>Game Over !</h1>`;
        }
    },1000);
}

// Making Bubbles on screeen...
function makeBubble(){
    let clutter="";
    for(let i=1; i<=264; i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
document.querySelector('.pbtm').innerHTML=clutter;
}

makeBubble();
runTimer();
getNewHit();
