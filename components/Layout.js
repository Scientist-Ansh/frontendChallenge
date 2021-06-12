import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Box } from "@chakra-ui/react";

const Layout = ({ details, children }) => {
  const {
    scholarship_start_date: startDate,
    application_end_date: deadline,
    duration,
    location,
    position,
    name: programName,
    company: { name: companyName },
  } = details;

  return (
    <>
      <Navbar />
      <Box my="70px">{children}</Box>
      <Footer
        startDate={startDate}
        deadline={deadline}
        duration={duration}
        location={location}
        position={position}
        programName={programName}
        companyName={companyName}
      />
    </>
  );
};

export default Layout;
