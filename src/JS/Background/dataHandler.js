const saveData = async (action, key, newValue = null) => {
    return new Promise((resolve, reject) => {
        action = action.toLowerCase();
        if (action === "set") {
            chrome.storage.sync.set({ [key]: newValue }, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(); // Resolve when set is complete
                }
            });
        } else if (action === "get") {
            chrome.storage.sync.get([key], (result) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(result); // Resolve with the retrieved value
                }
            });
        }
    });
}

export default saveData;