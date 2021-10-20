const Button = ({ text, marcar }) => {
  return (
    <li>
      <button onClick={marcar} className="key">
        {text}
      </button>
    </li>
  );
};

export default Button;
