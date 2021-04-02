const startBtn = document.querySelector('.start');
const clearBtn = document.querySelector('.clear');
const timer = document.querySelector('.timer');
const changeBtn = document.querySelector('.timer-button');
const sound = document.querySelector('#audio');
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const circle1 = document.querySelector('.circle1')
const circle2 = document.querySelector('.circle2')
const heading = document.querySelector('h1');

let intervalId;
let time;
let startingMins;

//Custom timer lengths
const getCustomTime = () => {
    startingMins = document.querySelector('#length').value; //time we type in
    time = startingMins * 60;
}

function timerFunc() {
    //first ever iteration of timer on page refresh
    if(time === undefined) { 
        getCustomTime()
        let minutes = Math.floor(time / 60) //total seconds divided by 60
        let seconds = time % 60 //total seconds mod 60 (remainder of minutes)
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timer.textContent = `${minutes}:${seconds}`;
        time--;
    } else {
        //after first ever iteration
        let minutes = Math.floor(time / 60)
        let seconds = time % 60 
        if(time < 0) {
            sound.play();
            circle1.style.opacity = '0'; //clear dial 
            circle2.style.opacity = '0'; //clear semi-dial
            return;
        } else {
            for(let i = time; i <= time; time--) {
                if(time < (startingMins * 60) * 0.5) {
                    circle2.style.opacity = '1';
                }
            }
            playDial();
        }
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timer.textContent = `${minutes}:${seconds}`;
    }
}

function triggerTimer() {
    if(time === undefined) { //always starts with time as undefined
        startPause();
    } else if(time === startingMins * 60) { //If typed input has changed since last input 
        getCustomTime(); //get the getCustomTime function to look again at the input value which by that time is the latest one. 
        startPause();
    }
}
startBtn.addEventListener('click', triggerTimer);

const startPause = () => {
    if(!intervalId) { //if not currently counting down
        intervalId = setInterval(timerFunc, 1000);
        startBtn.textContent = 'pause'; 
        changeBtn.disabled = true;
        // playDial(); 
    } else {
        clearInterval(intervalId);
        intervalId = null; 
        startBtn.textContent = 'start';
        changeBtn.disabled = false;
        // pauseDial();
    }
}

// const pauseDial = () => { //this part still not working - able to pause but not start again. 
//     box1.style.transform = window.getComputedStyle(box1).getPropertyValue("transform")||"initial";
//     box2.style.transform = window.getComputedStyle(box2).getPropertyValue("transform")||"initial";
//     box3.style.transform = window.getComputedStyle(box3).getPropertyValue("transform")||"initial";
//     box4.style.transform = window.getComputedStyle(box4).getPropertyValue("transform")||"initial";
// }

const playDial = () => {
    let rotation = Math.floor(360 - ((time / startingMins * 30) * 180))
    box1.style.transition = `transform 1s linear`
    box1.style.transform = `rotate(${Math.min(rotation, 180)}deg)`
    // box2.style.transition = `transform ${(startingMins * 60) * 0.75}s linear ${(startingMins * 60) * 0.25}s`
    // box2.style.transform = 'rotate(270deg)';
    // box3.style.transition = `transform ${(startingMins * 60) * 0.5}s linear ${(startingMins * 60) * 0.5}s`
    // box3.style.transform = 'rotate(180deg)';
    // box4.style.transition = `transform ${(startingMins * 60) * 0.25}s linear ${(startingMins * 60) * 0.75}s`
    // box4.style.transform = 'rotate(90deg)';
}

function cancelTimer() {
    let alert2 = confirm('Are you sure you want to stop this session?')
    if(alert2) {
        startBtn.textContent = 'start';
        resetTimer()
    } else if(!alert2 && startBtn.textContent === 'start') { 
        startBtn.textContent = 'start';
    } else {
        startBtn.textContent = 'pause'; 
    }
}
clearBtn.addEventListener('click', cancelTimer)

function changeTimer() {
    if(changeBtn.textContent === 'Take a break ☕️') { //has to be comparison operator here
        heading.textContent = 'Break'
        changeBtn.textContent = 'Back to work ✍️'; //has to be assignment operator here
        startBtn.textContent = 'start';
        changeBtn.style.backgroundColor = 'rgb(249, 64, 32)';
        startBtn.style.backgroundColor = 'rgb(112, 139, 215)';
        clearBtn.style.backgroundColor = 'rgb(112, 139, 215)';
        document.body.style.backgroundColor = 'rgb(112, 139, 215)';
        heading.style.color = 'rgb(112, 139, 215)';
        document.body.style.transition = '.5s ease-out';
        document.querySelector('#length').value = '5';
        box1.style.backgroundColor = 'rgb(112, 139, 215)';
        box1.style.transition = '.5s ease-out';
        box2.style.backgroundColor = 'rgb(112, 139, 215)';
        box2.style.transition = '.5s ease-out';
        box3.style.backgroundColor = 'rgb(112, 139, 215)';
        box3.style.transition = '.5s ease-out';
        box4.style.backgroundColor = 'rgb(112, 139, 215)';
        box4.style.transition = '.5s ease-out';
        resetTimer()
    } else if(changeBtn.textContent === 'Back to work ✍️') {
        heading.textContent = 'Work'
        changeBtn.textContent = 'Take a break ☕️';
        startBtn.textContent = 'start';
        changeBtn.style.backgroundColor = 'rgb(112, 139, 215)';
        startBtn.style.backgroundColor = 'rgb(249, 64, 32)';
        clearBtn.style.backgroundColor = 'rgb(249, 64, 32)';
        document.body.style.backgroundColor = 'rgb(249, 64, 32)';
        heading.style.color = 'rgb(249, 64, 32)';
        document.body.style.transition = '.5s ease-out';
        document.querySelector('#length').value = '25';
        box1.style.backgroundColor = 'rgb(249, 64, 32)';
        box1.style.transition = '.5s ease-out';
        box2.style.backgroundColor = 'rgb(249, 64, 32)';
        box2.style.transition = '.5s ease-out';
        box3.style.backgroundColor = 'rgb(249, 64, 32)';
        box3.style.transition = '.5s ease-out';
        box4.style.backgroundColor = 'rgb(249, 64, 32)';
        box4.style.transition = '.5s ease-out';
        resetTimer()
    }
}
changeBtn.addEventListener('click', changeTimer);

const resetTimer = () => {
    timer.textContent = '00:00'
    clearInterval(intervalId); 
    intervalId = null; //fixes having to click on start twice
    changeBtn.disabled = false;
    resetDial();
    getCustomTime();
}

function resetDial() {
    //moves all boxes back to original angle, and makes circle2 invisible
    box1.style.transition = `transform 1s linear`
    box1.style.transform = 'rotate(0deg)';
    box2.style.transition = `transform 1s linear`
    box2.style.transform = 'rotate(0deg)';
    box3.style.transition = `transform 2s linear`
    box3.style.transform = 'rotate(0deg)';
    box4.style.transition = `transform 2s linear`
    box4.style.transform = 'rotate(0deg)';
    circle2.style.transition = '1s'
    circle2.style.opacity = '0'; 
}
