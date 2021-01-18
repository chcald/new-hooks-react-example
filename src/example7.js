import React from "react"

class Username extends React.Component {
    state = { value: "" };
  
    changeValue(value) {
      this.setState({ value });
    }
    
    render() {
      const { value } = this.state;
      return <h1>Value:{value}</h1>;
    }
  }
  
  function App() {
    const usernameRef = React.useRef(null)
    const inputRef = React.useRef(null)
    function clickHandler() {
        usernameRef.current.changeValue(inputRef.current.value)
    }
  
    return (
      <div>
        <button onClick={clickHandler}>Change Username</button>
        <input ref={inputRef} type="text" />
        <Username ref={usernameRef} />
      </div>
    );
  }


  export default App
  
//   document.body.innerHTML = "<div id='root'></div>";
//   const rootElement = document.getElementById("root");
//   ReactDOM.render(<App />, rootElement);
  