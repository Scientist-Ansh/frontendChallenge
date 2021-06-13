import {
  Container,
  SimpleGrid,
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
    <Container as="main" maxW="container.lg" py="100px">
      <SimpleGrid columns={{ md: 2 }} spacingX="60px" margin="0 auto">
        <Box position="relative">
          <Image
            className={styles.program_logo}
            src={program_logo.src}
            alt="program logo"
          />
          <Heading
            as="h1"
            color="primary"
            fontWeight="semibold"
            lineHeight="tall"
            fontSize="tall"
          >
            {details.name}
          </Heading>
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
          <Button
            color="white"
            bg="primary"
            borderRadius="29px"
            p="18px 40px"
            h="auto"
          >
            Apply Now
          </Button>
        </Box>
        <Box>
          <Stack spacing={0} isInline alignItems="center" mb="30px">
            <Image src={logo_dark.src} alt="logo" ml="-40px" height="100px" />
            <Box>
              <Text fontWeight="semibold">Powered by:</Text>
              <Text>{companyName}</Text>
            </Box>
          </Stack>
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
            <Text>Some time</Text>
          </Box>
          <Flex
            p="40px 40px 17px 40px"
            fontSize="short"
            lineHeight="short"
            border="1px solid #DADADA"
            borderRadius="4px"
            flexWrap="wrap"
            mt="30px"
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
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Main;
