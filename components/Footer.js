import { Flex, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      position="sticky"
      bottom="0"
      p={6}
      w="100%"
      borderTop="1px solid rgb(218, 218, 218);"
      bg="white"
    >
      <Stack isInline spacing={10}>
        <div>
          <Text fontWeight="medium">some content</Text>
          <Text>some data</Text>
        </div>
        <div>
          <Text fontWeight="medium">some content</Text>
          <Text>some data</Text>
        </div>
        <div>
          <Text fontWeight="medium">some content</Text>
          <Text>some data</Text>
        </div>
        <div>
          <Text fontWeight="medium">some content</Text>
          <Text>some data</Text>
        </div>
      </Stack>
    </Flex>
  );
};

export default Footer;
