function saveData(action, key, newValue = null) {
    return new Promise((resolve, reject) => {
        action = action.toLowerCase();
        if (action === "set") {
            chrome.storage.sync.set({ key: newValue }, () => {
                resolve(); // Resolve when set is complete
            });
        } else if (action === "get") {
            chrome.storage.sync.get(["key"], (result) => {
                resolve(result.darkMode); // Resolve with the retrieved value
            });
        }
    });
}

export default saveData;