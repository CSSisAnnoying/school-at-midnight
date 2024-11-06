import React from "react";
import "./CountingButtons.css";

import CountingButton from "./CountingButton.tsx";

import { ButtonAction } from "../../App.tsx";

type PropTypes = {
    count: number;
    setCount: (action: ButtonAction) => void;
}

const CountingButtons = ({ count, setCount }: PropTypes) => {
    return (
        <div className="counting-buttons">
            <CountingButton action={"Increment"} onClick={() => setCount("Increment")} />
            <CountingButton action={"Decrement"} onClick={() => setCount("Decrement")} disabled={count === 0} />
        </div>
    )
}

export default CountingButtons;