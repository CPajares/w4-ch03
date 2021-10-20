import { useContext } from "react";
import phoneContext from "../Context/Context";

const Button = ({ text, className }) => {
  const { marcar } = useContext(phoneContext);
  return (
    <li>
      <button onClick={marcar} className={className}>
        {text}
      </button>
    </li>
  );
};

export default Button;
