const minutesEl = document.querySelector("#minuts")
const segudsEl = document.querySelector("#segunds")
const milisegundsEl = document.querySelector("#milisegunds")
const starBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const continueBtn = document.querySelector("#continueBtn")
const resumeBtn = document.querySelector("#resumeBtn")

let interval = true;
let minuts = 0;
let segunds = 0;
let milisegunds = 0;
let isPause = false;


starBtn.addEventListener("click", startTime)
pauseBtn.addEventListener("click", PauseTime)
continueBtn.addEventListener("click", continueTime)
resumeBtn.addEventListener("click", resertTime)

function startTime(){

    interval = setInterval(() => {
        if(!isPause){
            milisegunds += 10;
            
            if(milisegunds === 1000){
                segunds++;
                milisegunds = 0;
            }

            if(segunds === 60){
                minuts++;
                segunds = 0;
            }
            
            minutesEl.textContent = FormatTime(minuts);
            segudsEl.textContent = FormatTime(segunds);
            milisegundsEl.textContent = FormatMilisegunds(milisegunds);
        }

    }, 10);

    starBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function PauseTime(){
    isPause = true;
    pauseBtn.style.display = "none"
    continueBtn.style.display = "block"
}

function continueTime(){
    isPause = false
    pauseBtn.style.display = "block"
    continueBtn.style.display = "none"
}

function resertTime(){
    clearInterval(interval);
    milisegunds = 0;
    segunds = 0;
    minuts = 0;
    isPause = false;
    minutesEl.textContent = "00";
    segudsEl.textContent = "00";
    milisegundsEl.textContent = "000";

    starBtn.style.display = "block";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none";
}

function FormatTime(time) {
    return time < 10 ? `0${time}` : time
}

function FormatMilisegunds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}