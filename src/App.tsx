import React from 'react';
import './App.css';
/* const { ipcRenderer } = window.require("electron") */

function App() {

/*   const sendData = () => {
    ipcRenderer.send("setpos", JSON.stringify({
      name: "parth"
    }));
  } */

  return (
    <div className="App">

      <button /* onClick={sendData} */ id="qwe">Send</button>
    </div>
  );
}

export default App;
