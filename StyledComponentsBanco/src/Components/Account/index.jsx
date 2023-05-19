import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";

import { Icono, IconoTema, Box, Button, Saldo, Detalle } from "../UI";
import styled from "styled-components"

const IconoMargin = styled(Icono)`
  margin-top: 2px;
  margin-right: 2px;
`

const SaldoDisponible = styled.div`
    font-size: 26px;
    padding: 20px 0;
`

const Account = () => {
  const [toggleState, untoggle] = useState(true);
  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Cuenta</h2>
      <SaldoDisponible>
        Saldo disponible
        <span>
          <IconoTema src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalle>$</Detalle> 8,621.50
          </Saldo>
        ) : null}
      </SaldoDisponible>

      <Button onClick={toggleHandler}>
        <Icono
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Button>
    </Box>
  );
};

export default Account;
