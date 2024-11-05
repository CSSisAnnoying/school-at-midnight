const stylesURL = chrome.runtime.getURL("Scripts/Background/darkModeStyles.css");

const getDarkModeStyles = async () => {
    return new Promise((resolve) => {
        fetch(stylesURL)
            .then(response => response.text())
            .then(text => {
                resolve(text);
            })
    });
}

export default getDarkModeStyles;