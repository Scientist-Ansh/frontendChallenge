import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";

import styles from "@/styles/Main.module.css";

const Main = ({ details }) => {
  const {
    scholarship_start_date: startDate,
    application_end_date: deadline,
    duration,
    location,
    company: { name: companyName, logo_dark },
    program: { program_logo },
  } = details;

  const getDate = (date) => {
    const dateString = new Date(date.slice(0, 10)).toDateString();
    return `
      ${dateString.slice(8, 10)} ${dateString.slice(4, 7)} ${dateString.slice(
      -4
    )}
      `;
  };
  return (
    <Container as="main" maxW="container.lg" py="100px" position="relative">
      <div className={styles.container}>
        <Box className={styles.child} position="relative">
          <Image
            className={styles.program_logo}
            src={program_logo.src}
            alt="program logo"
          />
          <Heading
            as="h1"
            color="primary"
            fontWeight="semibold"
            fontSize={{ base: "35px", md: "tall" }}
          >
            {details.name}
          </Heading>
        </Box>
        <div className={styles.child}>
          <Text mt="32px" mb="40px" fontWeight="semibold">
            A fully funded work-study program to launch your tech career{" "}
          </Text>
          <Text>{details.description[0].data}</Text>
          <Text mt="30px" mb="40px">
            <Text as="span" fontWeight="semibold">
              Position:{" "}
            </Text>
            {details.position ? details.position : details.name}
          </Text>
          <Button className={styles.apply_now} bg="primary">
            Apply Now
          </Button>
        </div>

        <div className={styles.child}>
          <Flex spacing={0} alignItems="center" mb="30px" flexWrap="wrap">
            <Image src={logo_dark.src} alt="logo" ml="-40px" height="100px" />
            <Box w={{ base: "100%", md: "auto" }} order={{ base: -1, md: 1 }}>
              <Text>Powered by:</Text>
              <Text fontWeight="semibold">{companyName}</Text>
            </Box>
          </Flex>
          <Box
            p="40px"
            fontSize="short"
            lineHeight="short"
            border="1px solid #DADADA"
            borderRadius="4px"
          >
            <Text color="primary" fontWeight="semibold">
              Application closes in
            </Text>
            <Text lineHeight="short" fontSize="24px" mt="5px">
              00 Days : 00 Hrs : 00 Min : 00 Sec
            </Text>
          </Box>
          <Flex
            p="40px 40px 17px 40px"
            fontSize="short"
            lineHeight="short"
            border="1px solid #DADADA"
            borderRadius="4px"
            flexWrap="wrap"
            mt="30px"
            bg="white"
          >
            <Box w="50%" mb="23px">
              <Text color="primary" fontWeight="semibold">
                Location
              </Text>
              <Text>{location.name}</Text>
            </Box>
            <Box w="50%" mb="23px">
              <Text color="primary" fontWeight="semibold">
                Duration
              </Text>
              <Text>{`${duration} Year`}</Text>
            </Box>
            <Box w="50%" mb="23px">
              <Text color="primary" fontWeight="semibold">
                Start Date
              </Text>
              <Text>{getDate(startDate)}</Text>
            </Box>
            <Box w="50%" mb="23px">
              <Text color="primary" fontWeight="semibold">
                End Date
              </Text>
              <Text>{getDate(deadline)}</Text>
            </Box>
          </Flex>
        </div>
      </div>
      <Image
        className={styles.pattern}
        display={{ base: "none", md: "block" }}
        src="mainPattern.png"
        alt="pattern"
      />
    </Container>
  );
};

export default Main;
