import { useContext } from "react";
import phoneContext from "../Context/Context";

const Action = ({ clase }) => {
  //Función pending para agregar la clase al que corresponda
  const { calling, hang } = useContext(phoneContext);
  const hangDefault = (event) => {
    event.preventDefault();
    hang();
  };
  const callDefault = (event) => {
    event.preventDefault();
    calling();
  };
  return (
    <>
      <a href="g" type="button" onClick={callDefault} className="call active">
        Call
      </a>

      <a href="g" type="button" onClick={hangDefault} className="hang">
        Hang
      </a>
    </>
  );
};

export default Action;
