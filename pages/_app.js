import "../styles/globals.css";
import "../styles/styles.css";

import theme from "@/styles/theme";

import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
