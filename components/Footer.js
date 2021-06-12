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
      position="sticky"
      bottom="0"
      p={6}
      w="100%"
      borderTop="1px solid rgb(218, 218, 218);"
      bg="white"
    >
      <Stack isInline spacing={10}>
        <div>
          <Text fontWeight="medium">{companyName}</Text>
          <Text>{position ? position : programName}</Text>
        </div>
        <div>
          <Text fontWeight="medium">Location</Text>
          <Text>{location.name}</Text>
        </div>
        <div>
          <Text fontWeight="medium">Duration</Text>
          <Text>{duration} Year</Text>
        </div>
        <div>
          <Text fontWeight="medium">Start Date</Text>
          <Text>{getDate(startDate)}</Text>
        </div>
        <div>
          <Text fontWeight="medium">Application Deadline</Text>
          <Text>{getDate(deadline)}</Text>
        </div>
        <div>
          <Text fontWeight="medium">Application closes in</Text>
          <Text>some time</Text>
        </div>
      </Stack>
    </Flex>
  );
};

export default Footer;
