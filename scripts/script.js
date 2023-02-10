const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon_white.svg";
const moonIcon = "assets/MoonIcon.svg";

const linkedin = "assets/linkedin.svg";
const github = "assets/github.svg";

const linkedin_white = "assets/linkedin_white.svg";
const github_white = "assets/github_white.svg";
const sun_white = "";

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