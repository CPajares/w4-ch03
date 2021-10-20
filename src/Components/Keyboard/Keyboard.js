import Button from "../Button/Button";

const Keyboard = ({ estate, text }) => {
  return <Button text={text} className={`key${estate ? "" : " big"}`} />;
};

export default Keyboard;
