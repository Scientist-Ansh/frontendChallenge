import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `"ApercuPro", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
    body: `"ApercuPro", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
  },
  colors: {
    primary: "#685DC5",
  },
  lineHeights: {
    short: "24px",
    normal: "32px",
    tall: "56px",
  },
  fontSizes: {
    short: "16px",
    normal: "22px",
    tall: "48px",
  },
  styles: {
    global: {
      body: {
        color: "#535353",
        lineHeight: "32px",
        fontSize: "22px",
      },
    },
  },
});

export default theme;
