import React, { useState } from "react";
import { validarNombre, validarApellido, validarTelefono } from "./validaciones";
import { TextField, Button, Box } from "@mui/material";

const DatosPersonales = ({ updateStep }) => {

  const [nombre, setNombre] = useState({ value: '' , valid: null})
  const [apellido, setApellido] = useState({ value: '' , valid: null})
  const [telefono, setTelefono] = useState({ value: '' , valid: null})

  return (
    <Box
      component="form"
       autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={ (e) => {
        e.preventDefault();
        updateStep(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={nombre.value}
        error={nombre.valid === false}
        helperText={nombre.valid === false  && "Ingresa al menos 2 caracteres máx 30"}
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarNombre(value);
          setNombre({ value, valid })
          console.log(value, valid)
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={apellido.value}
        error={apellido.valid === false}
        helperText={apellido.valid === false  && "Ingresa al menos 2 caracteres máx 50"}
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarApellido(value);
          setApellido({ value,valid })
        }}
        
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        value={telefono.value}
        error={telefono.valid === false}
        helperText={telefono.valid === false  && "Ingresa un número válido"}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarTelefono(value);
          setTelefono({ value,valid })
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
