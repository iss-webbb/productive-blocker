const time = document.getElementById('time');
const startTimer = document.getElementById('start');
const stopTimer = document.getElementById('stop');
const input = document.getElementById('input');

let timer = null;
savedTime = 0;
let timeRunning = false;

startTimer.addEventListener('click', () => {
    const inputVal = input.value.trim();

    if (savedTime === 0) {
        totalTime = inputVal * 60;
        time.textContent = `${inputVal}:00`;
    } else {
        totalTime = savedTime;
    }

    timer = setInterval(() => {
        totalTime--;
        timeRunning = true;

        let mins = Math.floor(totalTime / 60);
        let sec = totalTime % 60;
        time.textContent = `${mins}: ${sec < 10 ? '0' + sec : sec}`

        if (totalTime < 0) {
            clearInterval(timer);
            timer = null;
            savedTime = 0;
        }
        
        savedTime = totalTime;
    }, 1000);
})

stopTimer.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
})