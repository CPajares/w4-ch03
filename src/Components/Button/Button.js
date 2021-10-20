import { useContext } from "react";
import phoneContext from "../Context/Context";

const Button = ({ text }) => {
  const { marcar } = useContext(phoneContext);
  return (
    <li>
      <button onClick={marcar} className="key">
        {text}
      </button>
    </li>
  );
};

export default Button;
