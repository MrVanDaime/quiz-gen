import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript, Container } from "@chakra-ui/react";

import theme from "./theme.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Container maxW="1280px" p="3rem" m="0 auto" textAlign="center">
        <App />
      </Container>
    </ChakraProvider>
  </React.StrictMode>
);
