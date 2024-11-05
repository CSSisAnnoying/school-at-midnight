(async () => {
    const waitForElement = async (selector) => {
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

    const waitForElementRemoved = (el, callBack) => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.removedNodes.length > 0 && Array.from(mutation.removedNodes).includes(el)) {
                    observer.disconnect();
                    callBack();
                }
            })
        });

        observer.observe(el.parentElement, { childList: true, subtree: true });
    }

    const getDescendants = (el) => {
        const descendants = [];
        [...el.children].forEach((child) => {
            descendants.push(child);
            descendants.push(...getDescendants(child));
        });
        return descendants;
    }

    const getElProperty = (el, property) => {
        const style = window.getComputedStyle(el);
        return parseInt(style.getPropertyValue(property));
    };

    const setSizeToPx = (el) => {
        const heightpx = getElProperty(el, "height");
        const widthpx = getElProperty(el, "width");

        const heightPercent = parseInt(el.style.height) / 100;
        const widthPercent = parseInt(el.style.width) / 100;

        const setElProperties = (height, width) => {
            el.style.setProperty("height", `${height}px`);
            el.style.setProperty("width", `${width}px`);
        }
        setElProperties(heightpx, widthpx);

        const onResize = () => {
            const parent = el.parentElement;
            const parentHeightpx = getElProperty(parent, "height");
            const parentWidthpx = getElProperty(parent, "width");

            const Newheightpx = heightPercent * parentHeightpx;
            const Newwidthpx = widthPercent * parentWidthpx;

            setElProperties(Newheightpx, Newwidthpx);
        }

        window.addEventListener("resize", onResize);
        waitForElementRemoved(el, () => {
            window.removeEventListener("resize", onResize);
        })
    }

    const getEl = (el, isNode) => {
        if (isNode) {
            return document.querySelector(el);
        } else {
            return el;
        }
    }

    const getIsFirstVisit = async () => {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({ message: "saveData", action: "get", key: "isFirstVisit" }, ((response) => {
                resolve(response.isFirstVisit);
            }));
        });
    }

    const isFirstVisit = await getIsFirstVisit();
    chrome.runtime.onMessage.addListener((request) => {
        if (request.message === "createNotification") {
            if (isFirstVisit) {
                createNotification(request.html, request.isNode);
            } else {
                const node = getEl(request.html, request.isNode);
                node.remove();
            }
        }
    })

    const fader = await waitForElement(".fader");
    const notificationContainer = document.createElement("div");
    notificationContainer.setAttribute("class", "notifications");
    fader.append(notificationContainer);

    const slideDownNotification = (notification) => {
        const removeFlexGap = () => {
            const halfGap = getElProperty(notificationContainer, "gap") / 2;
            notification.style.setProperty("margin-top", `${-halfGap}px`);
            notification.style.setProperty("margin-bottom", `${-halfGap}px`);
        }
        removeFlexGap();
        window.addEventListener("resize", removeFlexGap);
        waitForElementRemoved(notification, () => {
            window.removeEventListener("resize", removeFlexGap);
        });

        notification.style.setProperty("height", "0");
        notification.addEventListener("transitionend", (e) => {
            if (e.propertyName === "opacity") {
                notification.remove();
            }
        });
    };

    const closeNotification = (notification) => {
        notification.style.setProperty("transform", "translate(100%, -100%)");
        notification.style.setProperty("opacity", "0");

        getDescendants(notification).forEach(setSizeToPx);
        slideDownNotification(notification);
    }

    const createNotification = (html, isNode) => {
        const notification = document.createElement("div");
        notification.setAttribute("class", "notification");
        notification.innerHTML = `
            <div class="notification-wrapper">
                <button aria-label="Close notification">X</button>
                <img src="${chrome.runtime.getURL("Icons/128x128.png")}"></img>
                <p></p>
            </div>
        `;
        const wrapper = notification.querySelector(".notification-wrapper");
        const p = wrapper.querySelector("p");
        const button = wrapper.querySelector("button");

        p.append(getEl(html, isNode));
        notificationContainer.append(notification);

        setTimeout(() => {
            notification.style.setProperty("transform", "translateX(0)");
            notification.style.setProperty("opacity", "1");
        }, 50);

        let timeOutId;
        timeOutId = setTimeout(() => {
            closeNotification(notification);
            button.removeEventListener("click", onClick);
        }, 5000);

        const onClick = () => {
            clearTimeout(timeOutId);
            closeNotification(notification);
        }

        button.addEventListener("click", onClick);
    }
})()