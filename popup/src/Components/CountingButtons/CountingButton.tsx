import React, { useReducer } from "react";

type buttonStates = "mouseEnter" | "mouseLeave" | "mouseDown" | "mouseUp";
const scales: Record<buttonStates, number> = {
    mouseEnter: 1.1,
    mouseLeave: 1,
    mouseDown: 0.9,
    mouseUp: 1,
}

const buttonStatesReducer = (_, action: buttonStates) => {
    return scales[action];
}

type ActionType = "Increment" | "Decrement";
type PropTypes = {
    action: ActionType;
    onClick: () => void;
    disabled?: boolean;
}

const CountingButton = ({ action, onClick, disabled }: PropTypes) => {
    const [scale, setButtonState] = useReducer(buttonStatesReducer, scales.mouseLeave);

    if (disabled && scale !== scales.mouseLeave) setButtonState("mouseLeave");

    return (
        <button
            style={{ transform: `scale(${scale})` }}
            className="counter-button"
            onClick={onClick}
            onMouseEnter={() => setButtonState("mouseEnter")}
            onMouseLeave={() => setButtonState("mouseLeave")}
            onMouseDown={() => setButtonState("mouseDown")}
            onMouseUp={() => setButtonState("mouseUp")}
            onKeyDown={(e) => {if ((e.key === "Enter" || e.key === " ") && scale !== scales.mouseDown) setButtonState("mouseDown")}}
            onKeyUp={(e) => {if ((e.key === "Enter" || e.key === " ") && scale !== scales.mouseUp) setButtonState("mouseUp")}}
            disabled={disabled}
        >
            {action === "Increment" ? "+" : "-"}
        </button>
    )
}

export default CountingButton;