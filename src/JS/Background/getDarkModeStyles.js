const stylesURL = chrome.runtime.getURL("src/CSS/darkmodeStyles.css");

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