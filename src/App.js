import "./App.css";
import Info from "./Components/Info/Info";
import Display from "./Components/Display/Display";
import Action from "./Components/Action/Action";

import phoneContext from "./Components/Context/Context";
import Keyboard from "./Components/Keyboard/Keyboard";
import { useState } from "react";

function App() {
  const calling = () => {
    console.log("CALL");
  };
  const hang = () => {
    console.log("HANG");
  };
  const marcar = (event) => {
    if (numbersDisplay.length <= 9) {
      setNumbersDisplay(numbersDisplay + event.target.textContent);
    }
  };

  const deleted = (event) => {
    setNumbersDisplay([]);
  };
  const numbers = [
    { number: "1", state: true },
    { number: "2", state: true },
    { number: "3", state: true },
    { number: "4", state: true },
    { number: "5", state: true },
    { number: "6", state: true },
    { number: "7", state: true },
    { number: "8", state: true },
    { number: "9", state: true },
    { number: "0", state: true },
    { number: "DELETE", state: false },
  ];

  const [numbersDisplay, setNumbersDisplay] = useState([]);

  return (
    <phoneContext.Provider value={{ marcar, hang, calling, deleted, numbers }}>
      <div className="container">
        {/*  <span className="message">Calling...</span> */}
        <Info message={"calling"} />
        <main className="phone">
          <div className="keyboard-container">
            <ol className="keyboard">
              {numbers.map((number, i) => (
                <Keyboard
                  key={i}
                  text={number.number}
                  fun={number.state ? marcar : deleted}
                  estate={number.state}
                />
              ))}
            </ol>
          </div>
          <div className="actions">
            {/* <span className="number">667359961</span> */}
            <Display numbers={numbersDisplay} />
            <Action clase={"active"} />
            {/*  <a href="#" className="call">
            Call
          </a>

          <a href="#" className="hang active">
            Hang
          </a> */}
          </div>
        </main>
      </div>
    </phoneContext.Provider>
  );
}

export default App;
