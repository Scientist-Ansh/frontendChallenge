import { useState } from "react";
import {
  Container,
  Flex,
  Stack,
  Text,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider,
} from "@chakra-ui/react";
import SingleQuestion from "./SingleQuestion";

const a = [1, 2, 3];

const Faqs = ({ faqs }) => {
  const { items, categories: allCategories } = faqs;

  const [selectedFaq, setSelectedFaq] = useState({
    category: allCategories[0],
    items: items.filter((item) => item.type === allCategories[0]),
  });

  const handleCategory = (category) => {
    console.log(category);
    setSelectedFaq({
      category,
      items: items.filter((item) => item.type === category),
    });
  };

  return (
    <Container as="section" maxW="container.lg">
      <Flex justifyContent="space-between" alignItems="center" mb="64px">
        <Heading as="h2" color="primary" fontWeight="medium" fontSize="48px">
          Frequently asked <br /> Questions
        </Heading>

        <Flex alignItems="center">
          <Text color="#6A6A6A" mr={4}>
            Filter by:
          </Text>
          <Menu>
            <MenuButton>{selectedFaq.category}</MenuButton>
            <MenuList>
              {allCategories.map((category) => (
                <MenuItem
                  key={category}
                  onClick={() => handleCategory(category)}
                >
                  {category}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Accordion allowMultiple>
        {selectedFaq.items.map((item, i) => (
          <SingleQuestion question={item} key={i} />
        ))}
      </Accordion>
    </Container>
  );
};

export default Faqs;
