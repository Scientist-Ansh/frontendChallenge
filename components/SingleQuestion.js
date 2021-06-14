import {
  Flex,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
} from "@chakra-ui/react";

const SingleQuestion = ({ question }) => {
  return (
    <AccordionItem cursor="pointer">
      {({ isExpanded }) => (
        <>
          <Box>
            <AccordionButton
              as={Flex}
              justifyContent="space-between"
              p="30px 15px 30px 5px"
            >
              <Text
                color="primary"
                fontWeight="semibold"
                minW="250px"
                display={{ base: "none", md: "block" }}
              >
                {question.type}
              </Text>

              <Text fontWeight="semibold" flex={1}>
                {question.question}
              </Text>
              {isExpanded ? (
                <Image src="minus.gif" zIndex="-1" />
              ) : (
                <Image src="plus.png" zIndex="-1" />
              )}
            </AccordionButton>
          </Box>

          <AccordionPanel pb={4} mr="35px">
            {question.answer.map((answer, i) => (
              <Text
                key={i}
                mr={{ base: 0, md: "30px" }}
                ml={{ base: 0, md: "238px" }}
              >
                {answer.data}
              </Text>
            ))}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default SingleQuestion;
