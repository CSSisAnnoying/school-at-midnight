"use strict";

(async () => {

    console.log("%cSchool At Midnight🌚", "color: white; font-size: 3rem; font-family: courier; font-smooth: never; -webkit-font-smoothing: none; background-color: black; border-radius: 15px");
    console.log("%cReport any missed CSS or bugs to the github: https://github.com/CSSisAnnoying/school-at-midnight ", "color: white; font-size: 1.5rem; font-family: courier; font-smooth: never; -webkit-font-smoothing: none; background-color: black; border-radius: 15px")

    function saveData(action, newValue) {
        return new Promise((resolve, reject) => {
            action = action.toLowerCase();
            if (action === "set") {
                chrome.storage.sync.set({ darkMode: newValue }, () => {
                    resolve(); // Resolve when set is complete
                });
            } else if (action === "get") {
                chrome.storage.sync.get(["darkMode"], (result) => {
                    resolve(result.darkMode); // Resolve with the retrieved value
                });
            }
        });
    }

    function createNotification(html) {
        chrome.runtime.sendMessage({ message: "createNotification", html })
    }
    setTimeout(() => {
        createNotification("School At Midnight loaded!");

        const div = document.createElement("div");
        const span = document.createElement("span");
        const a = document.createElement("a");
        span.innerText = "Report any missed CSS or bugs to the github: ";
        a.innerText = "https://github.com/CSSisAnnoying/school-at-midnight"
        a.setAttribute("href", "https://github.com/CSSisAnnoying/school-at-midnight");
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
        div.setAttribute("class", "dasoijdaoisd")
        div.append(span);
        div.append(a);
        document.body.append(div);
        createNotification(".dasoijdaoisd");
    }, 2000);

    saveData("get").then((value) => {
        if (value == null || value === undefined) {
            saveData("set", false);
        }
    });

    async function waitForElement(selector) {
        return new Promise((resolve) => {
            const check = () => {
                const element = document.querySelector(selector);
                if (element) {
                    resolve(element);
                } else {
                    requestAnimationFrame(check); // Check on the next animation frame
                }
            };
            check();
        });
    }

    const themeSwitcher = await waitForElement(".theme-switcher")

    const sunIcon = themeSwitcher.querySelector(".sun-icon");
    const moonIcon = themeSwitcher.querySelector(".moon-icon");

    const fader = await waitForElement(".fader");

    const darkModeStyleElement = document.createElement("style");
    darkModeStyleElement.setAttribute("class", "dark-mode");
    chrome.runtime.sendMessage({ message: "getDarkModeStyles" }, (response) => {
        darkModeStyleElement.innerHTML = response;
    })

    function changeTheme(theme) {
        if (theme == "Dark") {
            document.body.insertBefore(darkModeStyleElement, document.body.firstChild);
            sunIcon.style.setProperty("display", "none");
            moonIcon.style.setProperty("display", "block");
        } else if (theme == "Light") {
            darkModeStyleElement.remove();
            sunIcon.style.setProperty("display", "block");
            moonIcon.style.setProperty("display", "none");
        }

        fader.style.setProperty("background", "transparent");
        fader.style.setProperty("pointer-events", "none");
        fader.removeEventListener("transitionend", changeTheme, true);
    }

    async function toggleTheme() {
        let isDarkMode = await saveData("get");
        if (isDarkMode) {
            saveData("set", false);
            fader.style.setProperty("background", "white");
            fader.style.setProperty("pointer-events", "all");
            fader.addEventListener("transitionend", () => {
                changeTheme("Light");
            });
        } else {
            saveData("set", true);
            fader.style.setProperty("background", "black");
            fader.style.setProperty("pointer-events", "all");
            fader.addEventListener("transitionend", () => {
                changeTheme("Dark");
            });
        }
    }

    themeSwitcher.onclick = await toggleTheme

    {
        let isDarkMode = await saveData("get")
        if (!isDarkMode) {
            sunIcon.style.setProperty("display", "block");
            moonIcon.style.setProperty("display", "none");
        } else {
            sunIcon.style.setProperty("display", "none");
            moonIcon.style.setProperty("display", "block");
            document.body.insertBefore(darkModeStyleElement, document.body.firstChild);

            setTimeout(() => {
                createNotification("Dark mode loaded successfully");
            }, 1900);
        }
    }

})();