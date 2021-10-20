import "./App.css";
import Info from "./Components/Info/Info";
import Display from "./Components/Display/Display";
import Action from "./Components/Action/Action";
import Button from "./Components/Button/Button";
import phoneContext from "./Components/Context/Context";

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
  return (
    <phoneContext.Provider value={{ marcar, hang, calling }}>
      <div className="container">
        {/*  <span className="message">Calling...</span> */}
        <Info message={"calling"} />
        <main className="phone">
          <div className="keyboard-container">
            <ol className="keyboard">
              <Button text={1} />
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
