import "./Style.css";

const ListaOpciones = (props) => {
  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    props.setValor(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" defaultValue="" disabled hidden>
          Seleccionar equipo
        </option>
        {props.equipos.map((equipo, index) => {
          return (
            <option key={index} value={equipo}>
              {equipo}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;
