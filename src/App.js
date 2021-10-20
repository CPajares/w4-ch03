import "./App.css";
import Info from "./Components/Info/Info";
import Display from "./Components/Display/Display";
import Action from "./Components/Action/Action";
import Button from "./Components/Button/Button";
import phoneContext from "./Components/Context/Context";
import Keyboard from "./Components/Keyboard/Keyboard";

function App() {
  const calling = () => {
    console.log("CALL");
  };
  const hang = () => {
    console.log("HANG");
  };
  const marcar = () => {
    console.log("marcando");
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

  return (
    <phoneContext.Provider value={{ marcar, hang, calling, numbers }}>
      <div className="container">
        {/*  <span className="message">Calling...</span> */}
        <Info message={"calling"} />
        <main className="phone">
          <div className="keyboard-container">
            <ol className="keyboard">
              {numbers.map((number, i) => (
                <Keyboard key={i} text={number.number} estate={number.state} />
              ))}
            </ol>
          </div>
          <div className="actions">
            {/* <span className="number">667359961</span> */}
            <Display numbers={666666} />
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
