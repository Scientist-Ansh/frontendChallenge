import { Flex, Stack, Text } from "@chakra-ui/react";

const Footer = ({
  startDate,
  deadline,
  duration,
  location,
  position,
  programName,
  companyName,
}) => {
  const getDate = (date) => {
    const dateString = new Date(date.slice(0, 10)).toDateString();
    return `
    ${dateString.slice(8, 10)} ${dateString.slice(4, 7)} ${dateString.slice(-4)}
    `;
  };
  return (
    <Flex
      justifyContent="center"
      position="fixed"
      bottom="0"
      p={6}
      w="100%"
      borderTop="1px solid rgb(218, 218, 218);"
      bg="white"
      zIndex="10"
      display={{ base: "none", lg: "flex" }}
    >
      <Stack isInline spacing={10} fontSize="short" lineHeight="short">
        <div>
          <Text fontWeight="semibold">{companyName}</Text>
          <Text>{position ? position : programName}</Text>
        </div>
        <div>
          <Text fontWeight="semibold">Location</Text>
          <Text>{location.name}</Text>
        </div>
        <div>
          <Text fontWeight="semibold">Duration</Text>
          <Text>{duration} Year</Text>
        </div>
        <div>
          <Text fontWeight="semibold">Start Date</Text>
          <Text>{getDate(startDate)}</Text>
        </div>
        <div>
          <Text fontWeight="semibold">Application Deadline</Text>
          <Text>{getDate(deadline)}</Text>
        </div>
        <div>
          <Text fontWeight="semibold">Application closes in</Text>
          <Text>00 Days : 00 Hrs : 00 Min : 00 Sec</Text>
        </div>
      </Stack>
    </Flex>
  );
};

export default Footer;
