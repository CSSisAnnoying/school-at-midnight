const fader = document.createElement("div");
fader.setAttribute("class", "fader");
document.body.append(fader);

const setTheme = (isDarkMode, inputState) => {
    chrome.runtime.sendMessage({ message: "setTheme", isDarkMode, inputState });
}

const runFadeAnimation = isDarkMode => {
    fader.style.setProperty("pointer-events", "all");
    fader.style.setProperty("background", isDarkMode ? "black" : "white");

    const transitionEnd = () => {
        fader.style.setProperty("background", "transparent");
        fader.style.setProperty("pointer-events", "none");
        fader.removeEventListener("transitionend", transitionEnd);
        window.removeEventListener("keydown", keyEvents);
        window.removeEventListener("keyup", keyEvents);
        setTheme(isDarkMode, "end");
    }
    const keyEvents = (e) => {
        if (e.key === " " || e.key === "Tab" || e.shiftKey || e.key === "Enter") {
            e.preventDefault();
        }
    } 

    fader.addEventListener("transitionend", transitionEnd);
    window.addEventListener("keydown", keyEvents);
    window.addEventListener("keyup", keyEvents);
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.message === "setTheme" && message.inputState === "begin") {
        runFadeAnimation(message.isDarkMode);
    }
});