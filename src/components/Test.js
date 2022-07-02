import React from "react";

export const Test = (props) => {
    let [count, setCount] = React.useState(0);

    const clickHandler = () => {
        setCount(count => count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={clickHandler}>+</button>
        </div>
    );
};
