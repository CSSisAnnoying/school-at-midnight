import React from "react";
import "./Counter.css";

import AnimatedDigit from "./AnimatedDigit.tsx";

type PropTypes = {
    count: number;
}

const numberToDigitArray = number => {
    return number.toString().split('').map(Number);
}

const Counter = ({ count }: PropTypes) => {
    const animated = !(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    let animatedDigits: JSX.Element[] = [];
    if (animated) {
        numberToDigitArray(count).forEach((digit, index) => {
            animatedDigits.push(<AnimatedDigit key={index} targetDigit={digit} />);
        });
    }

    return (
        <div className="counter-container">
            <span>Count: </span>
            {
                !animated ?
                    <span className="count">{count}</span>
                    :
                    <div className="animated-counter">
                        {animatedDigits}
                    </div>
            }
        </div>
    )
}

export default Counter;