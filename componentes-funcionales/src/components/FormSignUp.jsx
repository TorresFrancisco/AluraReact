import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useState } from "react";

function FormSignUp({ handleSubmit }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [promociones, setPromociones] = useState(true);
  const [novedades, setNovedades] = useState(false);
  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "Deben ser al menos 3 caracteres",
    },
    // lastName: {
    //   error: false,
    //   message: "Deben ser al menos 3 caracteres",
    // },
    // email: {},
    // promociones: {},
    // nomvedades: {},
  });

  function validarNombre(nombre) {
    if (nombre.length >= 3) {
      return {
        name: {
          error: false,
          message: "",
        },
      };
    } else {
      return {
        name: {
          error: true,
          message: "Deben ser al menos 3 caracteres",
        },
      };
    }
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({
            name,
            lastName,
            email,
            promociones,
            novedades,
          });
        }}
      >
        <TextField
          id="name"
          label="Nombre"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => setName(e.target.value)}
          value={name}
          helperText={errors.name.error ? errors.name.message : " "}
          error={errors.name.error}
          onBlur={(e) => {
            setErrors(validarNombre(e.target.value));
          }}
        />
        <TextField
          id="lastname"
          label="Apellidos"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <TextField
          id="email"
          label="Correo electronico"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={promociones}
                onChange={(e) => setPromociones(e.target.checked)}
              />
            }
            label="Promociones"
          />
          <FormControlLabel
            control={
              <Switch
                checked={novedades}
                onChange={(e) => setNovedades(e.target.checked)}
              />
            }
            label="Novedades"
          />
        </FormGroup>
        <Button type="submit" variant="contained">
          Registrarse
        </Button>
      </form>
    </>
  );
}

export default FormSignUp;
