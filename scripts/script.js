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

function redScorePlusOne(){
    redScore += 1;
    mRedScore.textContent = redScore;
}
function redScorePlusTwo(){
    redScore += 2;
    mRedScore.textContent = redScore;
}
function redScorePlusThree(){
    redScore += 3;
    mRedScore.textContent = redScore;
}
function redScoreClear(){
    redScore = 0;
    mRedScore.textContent = redScore;
}

// operate red foul
let redFoul = 0;
let mRedFoul = document.getElementById("red-foul");

function redFoulPlusOne(){
    redFoul += 1;
    mRedFoul.textContent = redFoul;
}
function redFoulClear(){
    redFoul = 0;
    mRedFoul.textContent = redFoul;
}

// operate blue score
let blueScore = 0;
let mBlueScore = document.getElementById("blue-score");

function blueScorePlusOne(){
    blueScore += 1;
    mBlueScore.textContent = blueScore;
}
function blueScorePlusTwo(){
    blueScore += 2;
    mBlueScore.textContent = blueScore;
}
function blueScorePlusThree(){
    blueScore += 3;
    mBlueScore.textContent = blueScore;
}
function blueScoreClear(){
    blueScore = 0;
    mBlueScore.textContent = blueScore;
}

// operate blue foul
let blueFoul = 0;
let mBlueFoul = document.getElementById("blue-foul");

function blueFoulPlusOne(){
    blueFoul += 1;
    mBlueFoul.textContent = blueFoul;
}
function blueFoulClear(){
    blueFoul = 0;
    mBlueFoul.textContent = blueFoul;
}

// operate blue foul
let roundNum = 0;
let mRoundNum = document.getElementById("round-num");

function roundNumPlusOne(){
    roundNum += 1;
    mRoundNum.textContent = roundNum;
}
function roundNumClear(){
    roundNum = 0;
    mRoundNum.textContent = roundNum;
}

