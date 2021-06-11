import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#685DC5",
  },
  styles: {
    global: {
      body: {
        color: "#535353",
      },
    },
  },
});

export default theme;
