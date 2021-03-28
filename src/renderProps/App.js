import React from 'react'
import ClickCounterTwo from './ClickCounterTwo'
import HoverCounterTwo from './HoverCounterTwo'
import Counter from './Counter'

const App = () => {
    return (
        <div>
            <Counter render={(count, incrementCount) => (
                <ClickCounterTwo count={count} incrementCount={incrementCount} />
            )} />
            <Counter render={(count, incrementCount) => (
                <HoverCounterTwo count={count} incrementCount={incrementCount} />
            )} />

        </div>

    );
}

export default App;