import Button from "../Button/Button";

const Keyboard = ({ estate, text }) => {
  return (
    <Button
      text={text}
      estate={estate}
      className={`key${estate ? "" : " big"}`}
    />
  );
};

export default Keyboard;
