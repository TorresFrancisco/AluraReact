import './App.css';
import { Container, Typography } from '@mui/material';
import FormSignUp from './components/FormSignUp';



function App() {
    const handleSubmit = ( valores ) => {
      console.log('Se ha enviado la información: ', valores)
    }
  return (
    <>
    <Container component='section' maxWidth="sm">
      <Typography variant='h3' align='center' component='h1' fontWeight='bold'>Formulario Registro</Typography>
      <FormSignUp handleSubmit={handleSubmit}/>
    </Container>
    </>
  );
}

export default App;
