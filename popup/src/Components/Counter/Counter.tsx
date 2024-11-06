import React from "react";
import "./Counter.css";

const Counter = ({ count }) => {
    return (
        <div className="counter-container">
            <span>Count: </span>
            <span className="count">{count}</span>
        </div>
    )
}

export default Counter;