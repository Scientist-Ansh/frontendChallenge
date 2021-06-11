import { Flex, Link, Image, Stack, Box } from "@chakra-ui/react";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <Flex as="header" bg="primary" className={styles.navbar}>
      <div>
        <Image src="harbourLogo.svg" fill="white" h="15px"></Image>
      </div>
      <Stack isInline alignItems="center" position="relative" spacing={7}>
        <div className={styles.apply_now}>
          <Box as="span" m="auto auto" textAlign="center">
            Apply
            <br />
            Now
          </Box>
        </div>
        <div>
          <Image src="menuIcon.svg" h="30px" cursor="pointer" />
        </div>
      </Stack>
    </Flex>
  );
};

export default Navbar;
