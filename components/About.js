import styles from "@/styles/About.module.css";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Divider,
  Stack,
} from "@chakra-ui/react";

const About = ({ details }) => {
  const {
    about,
    total_value,
    tuition,
    stipend_per_month,
    stipend_per_year,
    study_commitment,
    internship_commitment,
  } = details;
  return (
    <Container as="section" maxW="container.lg" mb="78px">
      <SimpleGrid columns={{ md: 2 }} spacingX="40px" margin="0 auto">
        <Box p="10px">
          <span>
            <Image
              className={styles.image}
              src="/student.png"
              alt="student"
              maxH="300px"
              m="auto"
            />
          </span>
        </Box>
        <Box pt="80px" pl="20px">
          <Heading
            as="h2"
            fontWeight="medium"
            color="primary"
            fontSize="48"
            mb="40px"
          >
            About the apprenticeship
          </Heading>
          <Text>{about[0].data}</Text>
        </Box>
      </SimpleGrid>
      <Flex mt="70px">
        <Flex
          direction="column"
          justifyContent="space-between"
          minW="300px"
          maxW="320px"
          p="32px 44px"
          border="1px solid #DADADA"
          borderRadius="4px"
          mr="25px"
        >
          <Box>
            <Text color="primary" fontWeight="medium">
              Scholarship Value
            </Text>
            <Text>{`€${total_value}`}</Text>
          </Box>
          <Box>
            <Divider mb="40px" />
            <Flex justifyContent="space-between">
              <div>
                <Text color="primary" fontWeight="medium">
                  Tuition covered
                </Text>
                <Text>{`€${tuition}`}</Text>
              </div>
              <div>
                <Text color="primary" fontWeight="medium">
                  Remaining
                </Text>
                <Text>{`€${total_value - tuition}`}</Text>
              </div>
            </Flex>
            <Box mt="20px">
              <Text color="primary">Living stipend</Text>
              <Text>{`€${stipend_per_year} (€${stipend_per_month}/month)`}</Text>
            </Box>
          </Box>
        </Flex>
        <Flex flexWrap="wrap">
          <Box
            minW="300px"
            maxW="320px"
            border="1px solid #DADADA"
            borderRadius="4px"
            p="32px 20px"
            mr="25px"
          >
            <Text color="primary" fontWeight="medium">
              Study commitment
            </Text>
            <Text mt="8px" mb="22px">
              {study_commitment} hours / day
            </Text>
            <Divider w="25px" mb="16px" />
            <Text>
              You will complete 15 modules to graduate. Daily classes are 3
              hours, plus coursework to complete in your own time.{" "}
            </Text>
          </Box>
          <Box
            minW="300px"
            maxW="320px"
            border="1px solid #DADADA"
            borderRadius="4px"
            p="32px 20px"
          >
            <Text color="primary" fontWeight="medium">
              Work commitment
            </Text>
            <Text mt="8px" mb="22px">
              {internship_commitment} hours / day
            </Text>
            <Divider w="25px" mb="16px" />
            <Text>
              Immerse yourself in the professional world during your
              apprenticeship. You’ll learn the ropes from the best and get to
              apply your newly acquired knowledge in the field from day one.{" "}
            </Text>
          </Box>
          <Flex w="100%" py="20px" alignItems="center">
            <Divider h="2px" />
            <Text px="10px">Graduation</Text>
            <Divider />
          </Flex>
          <Box
            border="1px solid #DADADA"
            borderRadius="4px"
            p="32px 40px"
            w="100%"
          >
            <Text color="primary" fontWeight="medium">
              A full-time contract
            </Text>
            <Text>
              You’ll be guaranteed a 1 year contract with SCG upon graduation.{" "}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default About;
