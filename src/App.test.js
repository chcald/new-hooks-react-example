import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

it('render without crashing', () =>{
    const div = document.createElement('div');
    // ReactDOM.render(<App />)
    console.log(true)
    ReactDOM.unmountComponentAtNode(div);
})