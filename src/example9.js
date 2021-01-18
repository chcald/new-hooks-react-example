
import React, { useState, useContext } from 'react';
import ThemeContext from './context/ThemeContext'


const Example9 = () => {
    const [darkMode, setDarkMode] = useState([]);
    const color = useContext(ThemeContext)


    return (
        <div className="Header">
            <h1 style={{ color }}>ReactHooks</h1>
        </div>
    )


}

export default Example9;