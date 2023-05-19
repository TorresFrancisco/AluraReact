import { useState } from "react";
import "./Style.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  // Destructuracion

  const { registrarColaborador, crearEquipo } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envio", e);
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar Nombre"
          required
          valor={nombre}
          setValor={setNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar Puesto"
          required
          valor={puesto}
          setValor={setPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar Foto"
          required
          valor={foto}
          setValor={setFoto}
        />
        <ListaOpciones
          valor={equipo}
          setValor={setEquipo}
          equipos={props.equipos}
        />
        <Boton texto="Crear" />
      </form>

      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar Titulo"
          required
          valor={titulo}
          setValor={setTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar Color"
          required
          valor={color}
          setValor={setColor}
          type="color"
        />
        <Boton texto="Registrar Equipo" />
      </form>
    </section>
  );
};

export default Formulario;
