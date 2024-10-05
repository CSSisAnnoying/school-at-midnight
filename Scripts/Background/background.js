import { darkModeStyles } from "./darkModeStyles.js";

const messageFunctions = {
    getDarkModeStyles: ({ sendResponse }) => {
        sendResponse(darkModeStyles);
    },
    createNotification: ({ message, sender }) => {
        chrome.tabs.sendMessage(sender.tab.id, { action: "createNotification", html: message.html });
    }
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const messageFunction = messageFunctions[message.message];
    if (messageFunction) {
        messageFunction({ message, sender, sendResponse });
    } else {
        console.warn(`No handler for message: ${message.message}`);
    }
});