import { useContext } from "react";
import phoneContext from "../Context/Context";

const Button = ({ text, className, estate }) => {
  const { marcar, deleted } = useContext(phoneContext);
  return (
    <li>
      <button onClick={estate ? marcar : deleted} className={className}>
        {text}
      </button>
    </li>
  );
};

export default Button;
