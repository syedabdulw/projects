const swHrs = document.querySelector(".stopwatch-hrs");
const swMin = document.querySelector(".stopwatch-min");
const swSec = document.querySelector(".stopwatch-sec");


const swStart = document.querySelector(".stopwatch-start");
const swStop = document.querySelector(".stopwatch-stop");
const swReset = document.querySelector(".stopwatch-reset");


let timer = true;
let sec = 0;
let min = 0;
let hrs = 0;

swStart.addEventListener("click", function(){
    if (timer == true){
        timer = false;
        swTimer();
    }
});


swStop.addEventListener("click", function(){
    timer = true;
});

swReset.addEventListener("click", function(){
    if (timer == false){
        timer = true;
    }

    sec = '00';
    min = '00';
    hrs = '00';

    swHrs.innerHTML ='0' + hrs;
    swMin.innerHTML ='0' + min;
    swSec.innerHTML ='0' + sec;
});

//function stopwatchtimer

function swTimer(){
    if (timer == false){

        sec = parseInt(sec);
        min = parseInt(min);
        hrs = parseInt(hrs);

        sec = sec + 1;
        if (sec == 60){
            min = min + 1;
            sec = 0;
        }

        if (min == 60){
            hrs = hrs + 1;
            min = 0;
            sec = 0;


        }

        if (sec < 10 || sec == 0){
            sec = '0' + sec;
        }
        if (min < 10 || min == 0){
            min = '0' + min;
        }
        if (hrs < 10 || hrs == 0){
            hrs = '0' + hrs;
        }

        console.log (hrs + ' ' + min + ' ' + sec);

        swHrs.innerHTML = hrs;
        swMin.innerHTML = min;
        swSec.innerHTML = sec;

        setTimeout("swTimer()", 1000);
    }
};