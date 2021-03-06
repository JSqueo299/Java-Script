let x;
let startstop = 0;

function startStop() {
  /* Toggle StartStop */

  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "Stop";
    document.getElementById("start").style.backgroundColor = "#E1341E";
  } else if (startstop === 2) {
    stop();
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("start").style.backgroundColor = "#228A08";
    startstop = 0;
  }
}

function start() {
  x = setInterval(timer, 10);
} 
function stop() {
  clearInterval(x);
} 

let milisec = 0;
let sec = 0; /* holds incrementing value */
let min = 0;
let hour = 0;

/* Contains and outputs returned value of  function checkTime */

let miliSecOut = 0;
let secOut = 0;
let minOut = 0;
let hourOut = 0;

/* Output variable End */

function timer() {
  /* Main Timer */

  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  milisec = ++milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;
  }

  document.getElementById("milisec").innerHTML = miliSecOut;
  document.getElementById("sec").innerHTML = secOut;
  document.getElementById("min").innerHTML = minOut;
  document.getElementById("hour").innerHTML = hourOut;
}

/* Adds 0 when value is <10 */

function checkTime(i) {
    return i.toString().padStart(2, '0');
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {
  /*Reset*/

  milisec = 0;
  sec = 0;
  min = 0;
  hour = 0;

  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";
}