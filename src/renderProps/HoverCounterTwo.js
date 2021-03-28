import React from 'react'

const HoverCounterTwo = ({ count, incrementCount }) => {
    return (
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    );
}

export default HoverCounterTwo;