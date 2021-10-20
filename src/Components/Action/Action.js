const Action = ({ clase, call, hang }) => {
  //Función pending para agregar la clase al que corresponda
  return (
    <>
      <a href="g" type="button" onClick={call} className="call active">
        Call
      </a>

      <a href="g" type="button" onClick={hang} className="hang">
        Hang
      </a>
    </>
  );
};

export default Action;
