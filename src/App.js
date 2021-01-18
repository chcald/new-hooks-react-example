import React from 'react'
// import GroceryApp from './example6'
import Example8 from './example8UseCallback'
import './App.css';
import ThemeContext from './context/ThemeContext';

export default function App() {

  return (
    <ThemeContext.Provider value="red">

      <Example8 />

    </ThemeContext.Provider>
  );

}
