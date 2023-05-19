import React, { useState } from "react";
import { validarInput } from "./validaciones";
import { TextField, Button, Box } from "@mui/material";

const DatosEntrega = ({updateStep} ) => {

    const [direccion, setDireccion] = useState({ value: '' , valid: null})
    const [ciudad, setCiudad] = useState({ value: '' , valid: null})
    const [provincia, setProvincia] = useState({ value: '' , valid: null})


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
        updateStep(3);
        console.log(direccion, ciudad, provincia);
      }}
      
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={direccion.value}
        error={direccion.valid === false}
        helperText={direccion.valid === false  && "Ingresa al menos 4 caracteres máx 30"}
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setDireccion({ value, valid })
          console.log(value, valid)
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ciudad.value}
        error={ciudad.valid === false}
        helperText={ciudad.valid === false  && "Ingresa al menos 4 caracteres máx 30"}
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setCiudad({ value, valid })
          console.log(value, valid)
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={provincia.value}
        error={provincia.valid === false}
        helperText={provincia.valid === false  && "Ingresa al menos 4 caracteres máx 30"}
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setProvincia({ value, valid })
          console.log(value, valid)
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
