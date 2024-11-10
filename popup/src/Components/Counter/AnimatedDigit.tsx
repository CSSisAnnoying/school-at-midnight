import React, { ReactElement } from "react";

type PropTypes = {
    targetDigit: number;
}

const AnimatedDigit = ({ targetDigit }: PropTypes) => {
    let allDigits: ReactElement[] = [];
    for (let i = 0; i < 10; i++) {
        allDigits.push(<span key={i}>{i}</span>);
    }

    return (
        <div className="animated-digit" style={{ transform: `translateY(${targetDigit * -100}%)` }}>
            {allDigits}
        </div>
    )
}

export default AnimatedDigit;