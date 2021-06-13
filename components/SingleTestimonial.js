import { Box, Avatar, Flex, Stack, Text, Image } from "@chakra-ui/react";

const SingleTestimonial = () => (
  <Box
    maxWidth="800px"
    px="30px"
    border="1px solid #DADADA"
    borderRadius="4px"
    m="2"
    bg="white"
  >
    <Flex
      justifyContent="space-between"
      height="120px"
      alignItems="center"
      lineHeight="short"
      fontSize="short"
    >
      <Stack spacing={5} isInline alignItems="center">
        <Avatar size="lg" />
        <Box>
          <Text fontWeight="semibold">Irene Pereyra</Text>
          <Text>Interaction Design Fellow ‘19</Text>
        </Box>
      </Stack>
      <Image height="20px" width="20px" src="linkedIn.svg" alt="linkedIn" />
    </Flex>
    <Box pl="120px" pt="20px" pr="117px" pb="40px">
      <Text mb="20px">
        This Fellowship was a turning point in my career. I wouldn’t be where I
        am today without the financial support and experienced offered through
        the program.{" "}
      </Text>
      <Text lineHeight="short" fontSize="short">
        Education · B.A. Visual Design
      </Text>
    </Box>
  </Box>
);

export default SingleTestimonial;
