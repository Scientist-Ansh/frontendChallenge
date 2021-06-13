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
    duration,
    study_commitment_text,
    internship_commitment_text,
  } = details;
  return (
    <Container as="section" maxW="container.lg" mb="78px">
      <SimpleGrid
        columns={{ md: 2 }}
        spacingX="40px"
        m="0 auto"
        mb={{ base: 5, md: 16 }}
        position="relative"
      >
        <Box className={styles.image_container} p="10px">
          <span>
            <Image className={styles.image} src="/student.png" alt="student" />
          </span>
        </Box>
        <Box className={styles.about}>
          <Heading
            as="h2"
            fontWeight="semibold"
            color="primary"
            fontSize="48"
            mb="40px"
          >
            About the apprenticeship
          </Heading>
          <Text>{about[0].data}</Text>
        </Box>
      </SimpleGrid>

      <Flex
        lineHeight="short"
        fontSize="short"
        className={styles.detail_container}
      >
        <div className={styles.details}>
          <Box>
            <Text color="primary" fontWeight="semibold">
              Scholarship Value
            </Text>
            <Text
              fontSize={{ base: "normal", md: "tall" }}
              lineHeight={{ base: "normal", md: "tall" }}
            >{`€${total_value}`}</Text>
          </Box>
          <Box>
            <Divider mb="40px" />
            <Flex justifyContent="space-between">
              <div>
                <Text color="primary" fontWeight="semibold">
                  Tuition covered
                </Text>
                <Text
                  fontSize={{ base: "normal", md: "short" }}
                  lineHeight={{ base: "normal", md: "short" }}
                >{`€${tuition}`}</Text>
              </div>
              <div>
                <Text color="primary" fontWeight="semibold">
                  Remaining
                </Text>
                <Text
                  fontSize={{ base: "normal", md: "short" }}
                  lineHeight={{ base: "normal", md: "short" }}
                >{`€${total_value - tuition}`}</Text>
              </div>
            </Flex>
            <Box mt="20px">
              <Text color="primary" fontWeight="semibold">
                Living stipend
              </Text>
              <Text
                fontSize={{ base: "normal", md: "short" }}
                lineHeight={{ base: "normal", md: "short" }}
              >{`€${stipend_per_year} (€${stipend_per_month}/month)`}</Text>
            </Box>
          </Box>
        </div>
        <Flex flexWrap="wrap">
          <Box
            className={styles.detail_box}
            mr={{ lg: 5 }}
            mb={{ base: 5, lg: 0 }}
          >
            <Text color="primary" fontWeight="semibold">
              Study commitment
            </Text>
            <Text mt="8px" mb="22px" fontSize="normal">
              {study_commitment} hours / day
            </Text>
            <Divider w="25px" mb="16px" />
            <Text>{study_commitment_text}</Text>
          </Box>
          <Box className={styles.detail_box}>
            <Text color="primary" fontWeight="semibold">
              Work commitment
            </Text>
            <Text mt="8px" mb="22px" fontSize="normal">
              {internship_commitment} hours / day
            </Text>
            <Divider w="25px" mb="16px" />
            <Text>{internship_commitment_text}</Text>
          </Box>
          <Flex w="100%" py="20px" alignItems="center">
            <Divider borderColor="#DADADA" opacity={1} />
            <Text px="10px">Graduation</Text>
            <Divider borderColor="#DADADA" opacity={1} />
          </Flex>
          <Box
            border="1px solid #DADADA"
            borderRadius="4px"
            p="32px 40px"
            w="100%"
          >
            <Text color="primary" fontWeight="semibold">
              A full-time contract
            </Text>
            <Text mt="8px" mb="22px" fontSize="normal">
              {duration} Year
            </Text>
            <Divider w="25px" mb="16px" />
            <Text>
              Successful candidates may be transitioned into full-time roles.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default About;
