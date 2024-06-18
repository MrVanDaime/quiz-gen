import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, Container } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Container maxW="1280px" p="3rem" m="0 auto" textAlign="center">
        <App />
      </Container>
    </ChakraProvider>
  </React.StrictMode>
);
