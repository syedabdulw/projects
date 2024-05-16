// Initialize Same Variables
const day  = document.getElementById('day');
const hour  = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

// countdown Function
function eidUlAzha() {
    let millisec = 1000;
    let min = millisec * 60;
    let hr = min *  60 ;
    let dy = hr *   24 ;                   
  
    let countDown = new Date('june 16, 2024').getTime();
    let today = new Date().getTime();
    let gap = countDown - today;

    if (gap < 0) {
        gap = 0;
      }

    let d = Math.floor(gap / (dy));
    let h = Math.floor(gap % (dy) / (hr));
    let m = Math.floor(gap % (hr) / (min));
    let s = Math.floor(gap % (min) / (millisec));

    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}  

setInterval(() => {
  eidUlAzha();
},1000)