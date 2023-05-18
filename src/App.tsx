import "./App.css";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/defaultTheme";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">Opa, bão?</div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
