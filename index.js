// COUNTDOWN || TIMER
const doc = window.document;
const timerEl = doc.getElementById('timer');
const btnPause = doc.getElementById('btnPause');
const btnPlay = doc.getElementById('btnPlay');

let minutes = 20;
let seconds = 10;
let pause = false;
let intervalId = null;

function timer () {
    if (seconds < 10) {
      timerEl.innerText = `${minutes}:0${seconds}`;
    } else {
      timerEl.innerText = `${minutes}:${seconds}`;
    }

    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    if (minutes < 0) {
      alert('Abis  waktunya lekku');
    }
}

function countdown() {
  intervalId = setInterval(() => {
    timer();
  }, 1000);
}

btnPause.addEventListener('click', () => {
  clearInterval(intervalId);
});

btnPlay.addEventListener('click', () => {
  intervalId = setInterval(() => {
    timer();
  }, 1000)
})

countdown();
