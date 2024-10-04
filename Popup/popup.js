let count = 0;
const countEl = document.querySelector(".count");
const scales = {
    mousedown: 1.2,
    mouseup: 1,
    mouseleave: 1
}

document.querySelectorAll(".counter-button").forEach((button) => {
    const buttonAction = button.classList.contains("increment") ? "increment" : "decrement";
    for (const event in scales) {
        button.addEventListener("event", () => {
            button.style.setProperty("transform", `scale(${scales[event]})`);
        });
    }

    button.addEventListener("click", () => {
        count += buttonAction === "increment" ? 1 : -1;
        countEl.innerText = count;
    });
});