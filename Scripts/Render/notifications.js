(async () => {
    async function waitForElement(selector) {
        return new Promise((resolve) => {
            const check = () => {
                const element = document.querySelector(selector);
                if (element) {
                    resolve(element);
                } else {
                    requestAnimationFrame(check);
                }
            };
            check();
        });
    }

    chrome.runtime.onMessage.addListener((request) => {
        if (request.message === "createNotification") {
            createNotification(request.html, request.isNode);
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

    const createNotification = (html, isNode) => {
        const notification = document.createElement("div");
        notification.setAttribute("class", "notification");
        notification.innerHTML = `
            <button aria-label="Close notification">X</button>
            <img src="${chrome.runtime.getURL("Icons/128x128.png")}"></img>
            <p></p>
        `;
        const p = notification.querySelector("p");
        const button = notification.querySelector("button");

        if (isNode) {
            p.append(document.querySelector(html));
        } else {
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