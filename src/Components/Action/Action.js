import { useContext } from "react";
import phoneContext from "../Context/Context";

const Action = ({ clase }) => {
  //Función pending para agregar la clase al que corresponda
  const { calling, hang, classOff } = useContext(phoneContext);
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
      <a
        href="g"
        type="button"
        onClick={callDefault}
        className={`"call ${clase ? "active" : "off"}`}
      >
        Call
      </a>

      <a
        href="g"
        display="none"
        type="button"
        onClick={hangDefault}
        className={`"hang ${clase ? "off" : "active"}`}
      >
        Hang
      </a>
    </>
  );
};

export default Action;
