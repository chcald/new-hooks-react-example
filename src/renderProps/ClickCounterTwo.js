import React from 'react'

const ClickCounterTwo = ({ count, incrementCount }) => {
    return (
        <button onClick={incrementCount}>Clicked {count} times</button>
    );
}

export default ClickCounterTwo;