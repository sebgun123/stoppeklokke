seconds = 0;
const laps = document.getElementById('laps');
const disp = document.getElementById('display');
var number = 0;

number = 0;
function start() {
    mytimer = setInterval(teller,1000);
}

function teller() {
    number++;
    document.getElementById('inc').value = number;
}


function stop() {
    clearInterval(mytimer);
}

function lap(){
    laps.innerHTML += /*html*/`
    <li>${number}</li>
    `
}