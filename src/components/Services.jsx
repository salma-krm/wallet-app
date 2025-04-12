import { useState } from "react";
 

export default function SecondComponent() {
  const [inputValue, setInputValue] = useState('');
  
  return (
    <div className="container">
      <h1 className="header">Services</h1>
      
      <input
        type="text"
        className="inputField"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Type something..."
      />
      
      <p className="outputText">You typed: {inputValue}</p>
    </div>
  );
}
