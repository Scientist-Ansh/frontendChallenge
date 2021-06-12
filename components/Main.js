import { Container, SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
const Main = ({ details }) => {
  console.log(details);
  return (
    <Container as="main" maxW="container.lg" py="100px">
      <SimpleGrid columns={{ md: 2 }} spacingX="60px" margin="0 auto">
        <Box>
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
        </Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </Container>
  );
};

export default Main;
