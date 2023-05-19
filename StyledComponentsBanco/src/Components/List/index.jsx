import React from "react";
import { Box, Button } from "../UI";
import { lista } from "../../info";
import Card from "../Card";

const List = () => {
  return (
    <Box>
      {lista.cargos.map((cargo, i) => {
        return <Card key={i} cargo={cargo} />;
      })}
      <Button>Ver más</Button>
    </Box>
  );
};

export default List;
