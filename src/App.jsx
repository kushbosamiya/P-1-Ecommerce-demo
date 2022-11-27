import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./MainRoute";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";

// import fonts
import "@fontsource/montserrat";
import "@fontsource/poppins";

function App() {
  const customeTheme = extendTheme({
    colors: {},
    fonts: {
      heading: "montserrat",
      body: "poppins",
    },
    fontSizes: {},
  });

  return (
    <>
      <ChakraProvider theme={customeTheme}>
        <Router>
          <MainRoutes />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
