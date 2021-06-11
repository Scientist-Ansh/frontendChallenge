import { Container, SimpleGrid, Box } from "@chakra-ui/react";
const Main = () => {
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={{ md: 2 }} spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </Container>
  );
};

export default Main;
