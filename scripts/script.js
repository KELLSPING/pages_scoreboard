const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon_white.svg";
const moonIcon = "assets/MoonIcon.svg";

const linkedin = "assets/linkedin.svg";
const github = "assets/github.svg";

const linkedin_white = "assets/linkedin_white.svg";
const github_white = "assets/github_white.svg";

const themeIcon = document.getElementById("theme-icon");
const linkedinIcon = document.getElementById("linkedin-icon");
const githubIcon = document.getElementById("github-icon");

// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
    const theme = document.getElementById("theme");
    if (theme.getAttribute("href") === lightTheme) {
        theme.setAttribute("href", darkTheme);
        themeIcon.setAttribute("src", sunIcon);
        linkedinIcon.setAttribute("src", linkedin_white);
        githubIcon.setAttribute("src", github_white);
    } else {
        theme.setAttribute("href", lightTheme);
        themeIcon.setAttribute("src", moonIcon);
        linkedinIcon.setAttribute("src", linkedin);
        githubIcon.setAttribute("src", github);
    }
}

// operate red score
let redScore = 0;
let mRedScore = document.getElementById("red-score");

function redScorePlusOne() {
    redScore += 1;
    mRedScore.textContent = redScore;
}
function redScorePlusTwo() {
    redScore += 2;
    mRedScore.textContent = redScore;
}
function redScorePlusThree() {
    redScore += 3;
    mRedScore.textContent = redScore;
}
function redScoreClear() {
    redScore = 0;
    mRedScore.textContent = redScore;
}

// operate red foul
let redFoul = 0;
let mRedFoul = document.getElementById("red-foul");

function redFoulPlusOne() {
    redFoul += 1;
    mRedFoul.textContent = redFoul;
}
function redFoulClear() {
    redFoul = 0;
    mRedFoul.textContent = redFoul;
}

// operate blue score
let blueScore = 0;
let mBlueScore = document.getElementById("blue-score");

function blueScorePlusOne() {
    blueScore += 1;
    mBlueScore.textContent = blueScore;
}
function blueScorePlusTwo() {
    blueScore += 2;
    mBlueScore.textContent = blueScore;
}
function blueScorePlusThree() {
    blueScore += 3;
    mBlueScore.textContent = blueScore;
}
function blueScoreClear() {
    blueScore = 0;
    mBlueScore.textContent = blueScore;
}

// operate blue foul
let blueFoul = 0;
let mBlueFoul = document.getElementById("blue-foul");

function blueFoulPlusOne() {
    blueFoul += 1;
    mBlueFoul.textContent = blueFoul;
}
function blueFoulClear() {
    blueFoul = 0;
    mBlueFoul.textContent = blueFoul;
}

// operate blue foul
let roundNum = 0;
let mRoundNum = document.getElementById("round-num");

function roundNumPlusOne() {
    roundNum += 1;
    mRoundNum.textContent = roundNum;
}
function roundNumClear() {
    roundNum = 0;
    mRoundNum.textContent = roundNum;
}

// operate clock
let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");

let mStart = document.getElementById('time-start');
let mStop = document.getElementById('time-stop');
let mReset = document.getElementById('time-reset');

//store a reference to the startTimer variable
var startTimer = null;

mStart.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

mStop.addEventListener('click', function () {
    clearInterval(startTimer)
})

mReset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        s.value = 59;
        m.value = 59;
        h.value--;
    }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}

// operate the reset in the header
let mHReset = document.getElementById('reset');
let mRedName = document.getElementById('red-name');
let mBlueName = document.getElementById('blue-name');

mHReset.addEventListener('click', function () {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopInterval()

    mRedName.value = ''
    mBlueName.value = ''

    mRoundNum.textContent = 0;

    mRedScore.textContent = 0;

    mRedFoul.textContent = 0;

    mBlueScore.textContent = 0;

    mBlueFoul.textContent = blueFoul;
})