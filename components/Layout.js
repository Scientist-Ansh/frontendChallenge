import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box my="70px">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
