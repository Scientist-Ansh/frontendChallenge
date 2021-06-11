import { Flex, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      position="fixed"
      bottom="-80px"
      p={8}
      w="100%"
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
