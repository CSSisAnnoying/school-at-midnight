(async () => {
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

    chrome.runtime.onMessage.addListener((request, sender, response) => {
        console.log("MAKE");
        if (request.action === "createNotification") {
            createNotification(request.html);
        }
    })

    const fader = await waitForElement(".fader");
    const notificationContainer = document.createElement("div");
    notificationContainer.setAttribute("class", "notifications");
    fader.append(notificationContainer);

    const closeNotification = (notification) => {
        notification.style.setProperty("translate", "100%");
        notification.style.setProperty("opacity", "0");
        notification.addEventListener("transitionend", (e) => {
            if (e.propertyName === "translate") {
                notification.style.setProperty("height", "0");
                notification.addEventListener("transitionend", (e) => {
                    if (e.propertyName === "height") {
                        notification.remove();
                    }
                })
            }
        });
    }

    const createNotification = (html) => {
        console.log(html);
        const notification = document.createElement("div");
        notification.setAttribute("class", "notification");
        notification.innerHTML = `
            <button>X</button>
            <img src="https://github.com/CSSisAnnoying/school-at-midnight/raw/main/Icons/128x128.png?raw=true"></img>
            <p></p>
        `;
        const p = notification.querySelector("p");
        const button = notification.querySelector("button");

        try {
            const element = document.querySelector(html);
            p.append(element != null ? element : html);
        } catch (err) {
            p.append(html);
        }
        notificationContainer.append(notification);

        setTimeout(() => {
            notification.style.setProperty("translate", "0");
            notification.style.setProperty("opacity", "1");
        }, 50);

        let timeOutId;
        timeOutId = setTimeout(() => {
            closeNotification(notification);
        }, 5000);

        button.addEventListener("click", () => {
            clearTimeout(timeOutId);
            closeNotification(notification);
        });
    }
})()