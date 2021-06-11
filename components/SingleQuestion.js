import {
  Flex,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const SingleQuestion = ({ question }) => {
  return (
    <AccordionItem>
      <Box>
        <AccordionButton
          as={Flex}
          justifyContent="space-between"
          p="30px 15px 30px 5px"
        >
          <Text color="primary" fontWeight="medium" minW="250px">
            {question.type}
          </Text>

          <Text fontWeight="medium" flex={1}>
            {question.question}
          </Text>

          <AccordionIcon w="10%" />
        </AccordionButton>
      </Box>
      <AccordionPanel pb={4} mr="35px">
        {question.answer.map((answer, i) => (
          <Text key={i} mr="40px" ml="238px">
            {answer.data}
          </Text>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default SingleQuestion;
