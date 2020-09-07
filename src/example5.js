import React, {useEffect, useRef} from 'react'

import Input from './Input'

function App() {
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const subRef = useRef(null)

    useEffect( () => {
        firstNameRef.current.focus()
    },[])

    function firstKeyDown(e){
        if(e.key === "Enter")
        lastNameRef.current.focus()
    }

    function lastKeyDown(e){
        if(e.key === "Enter")
        subRef.current.focus()
    }

    function submitKeyDown() {
        alert('form submited')
    }

    return (
        <div>
            <Input 
                type="text" 
                onKeyDown={firstKeyDown}
                ref={firstNameRef} 
                placeholder="enter first name"/>
            <Input 
                type="text"
                onKeyDown={lastKeyDown}
                ref={lastNameRef} 
                placeholder="enter last name"/>
            <button
                onKeyDown={submitKeyDown}
                ref={subRef}
                >Submit</button>
        </div>

    )
}


export default App