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

// background.js

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    // Check if the active tab's URL is Google Classroom
    if (tab.url && tab.url.includes("classroom.google.com")) {
      // Show the action button (popup) when on Google Classroom
      chrome.action.enable(tabId);
    } else {
      // Disable the action button (popup) for other sites
      chrome.action.disable(tabId);
    }
  }
});

chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url && tab.url.includes("classroom.google.com")) {
      chrome.action.enable(activeInfo.tabId);
    } else {
      chrome.action.disable(activeInfo.tabId);
    }
  });
});
