import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    primary: "#57C278",
    secondary: "#82CFFA",
    tertiary: "#A6D157",
    quaternaty: "#E06B69",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Esto es un Container con Styled-Components</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
