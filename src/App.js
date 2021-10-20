import "./App.css";
import Info from "./Components/Info/Info";
import Display from "./Components/Display/Display";
import Action from "./Components/Action/Action";
import Button from "./Components/Button/Button";

function App() {
  /* const deleteGentleman = (event) => {
    event.preventDefault();
    onDeleteGentleman();
  }; */
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
    <div className="container">
      {/*  <span className="message">Calling...</span> */}
      <Info message={"calling"} />
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <Button text={1} marcar={marcar} />
          </ol>
        </div>
        <div className="actions">
          {/* <span className="number">667359961</span> */}
          <Display numbers={666666} />
          <Action clase={"active"} call={calling} hang={hang} />
          {/*  <a href="#" className="call">
            Call
          </a>

          <a href="#" className="hang active">
            Hang
          </a> */}
        </div>
      </main>
    </div>
  );
}

export default App;
