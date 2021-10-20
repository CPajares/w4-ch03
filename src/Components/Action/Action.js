const Action = ({ clase, call, hang }) => {
  //Función pending para agregar la clase al que corresponda

  const hangDefault = (event) => {
    event.preventDefault();
    hang();
  };
  const callDefault = (event) => {
    event.preventDefault();
    call();
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
