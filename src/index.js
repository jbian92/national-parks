import { ThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import App from "./App";
import createTheme from "@material-ui/core/styles/createTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"

const theme = responsiveFontSizes(createTheme());

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <ThemeProvider theme={theme}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);