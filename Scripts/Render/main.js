"use strict";

(async () => {

    console.log("%cSchool At Midnight🌚", "color: white; font-size: 3rem; font-family: courier; font-smooth: never; -webkit-font-smoothing: none; background-color: black; border-radius: 15px");
    console.log("%cReport any missed CSS or bugs to the github: https://github.com/CSSisAnnoying/school-at-midnight ", "color: white; font-size: 1.5rem; font-family: courier; font-smooth: never; -webkit-font-smoothing: none; background-color: black; border-radius: 15px")

    let isDarkMode = false;

    const darkModeHandler = async (action, newValue) => {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({ message: "saveData", action, key: "darkMode", value: newValue }, ((response) => {
                if (action === "get") {
                    resolve(response.darkMode);
                    return;
                }
                resolve();
                isDarkMode = newValue;
            }));
        });
    }

    const createNotification = (html, isNode) => {
        isNode = isNode ? isNode : false;
        chrome.runtime.sendMessage({ message: "createNotification", html, isNode });
    }

    {
        const value = await darkModeHandler("get");
        if (value === null || value === undefined) {
            darkModeHandler("set", false);
        }
        isDarkMode = value;
    }

    setTimeout(() => {
        createNotification("School At Midnight loaded!");

        {
            const div = document.createElement("div");
            div.innerHTML = `
                <span>Report any missed CSS or bugs to the github: </span>
                <a href="https://github.com/CSSisAnnoying/school-at-midnight" target="_blank" rel="noopener noreferrer">https://github.com/CSSisAnnoying/school-at-midnight</a>
            `
            div.setAttribute("class", "dasoijdaoisd")

            document.body.append(div);
            createNotification(".dasoijdaoisd", true);
        }
        {
            const className = "dasoijdaoisd2";
            const styles = document.createElement("style");
            styles.textContent = `
                .${className} button {
                    text-decoration: underline;
                    color: var(--neon-blue);
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: filter 200ms ease;
                    filter: brightness(1);
                    padding: 0;
                }   

                .${className} button:hover {
                    filter: brightness(0.8);
                }
                `;

            const div = document.createElement("div");
            div.innerHTML = `
                <span>You can disable these notifications in the </span>
                <button>settings.</button>
            `;
            div.setAttribute("class", className);

            div.querySelector("button").addEventListener("click", () => {
                chrome.runtime.sendMessage({ message: "openPopup" });
            });

            div.appendChild(styles);
            document.body.appendChild(div);

            createNotification("." + className, true);
        }
    }, 2000);

    const waitForElement = async (selector) => {
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

    const darkModeStyleElement = document.createElement("style");
    darkModeStyleElement.setAttribute("class", "dark-mode");
    chrome.runtime.sendMessage({ message: "getDarkModeStyles" }, (response) => {
        darkModeStyleElement.textContent = response;
    })

    const toggleTheme = () => {
        // if (themeSwitcher.getAttribute("disabled")) return;
        isDarkMode = !isDarkMode;
        darkModeHandler("set", isDarkMode);
    }

    chrome.runtime.onMessage.addListener((message) => {
        if (message.message === "setTheme") {
            isDarkMode = message.isDarkMode;
            if (message.inputState === "end") {
                if (message.isDarkMode) {
                    document.body.insertBefore(darkModeStyleElement, document.body.firstChild);
                } else {
                    darkModeStyleElement.remove();
                }
            }
        }
    });

    const setTheme = (isDarkMode, inputState) => {
        chrome.runtime.sendMessage({ message: "setTheme", isDarkMode, inputState });
    }

    chrome.storage.onChanged.addListener((changes, namespace) => {
        if (namespace !== "sync") return;
        if (changes.darkMode === undefined) return;
        let isDarkMode = changes.darkMode;
        if (isDarkMode.newValue === isDarkMode.oldValue) return;
        if (isDarkMode.oldValue === undefined) return;
        isDarkMode = isDarkMode.newValue;

        setTheme(isDarkMode, !(window.matchMedia('(prefers-reduced-motion: reduce)').matches) ? "begin" : "end");
    });

    themeSwitcher.addEventListener("click", toggleTheme);

    setTheme(isDarkMode, "end");
    setTimeout(() => {
        createNotification("Dark mode loaded successfully!");
    }, 1900);
    console.log("Dark mode loaded successfully!");

})();