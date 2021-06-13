import { useState } from "react";
import {
  Container,
  Flex,
  Text,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Accordion,
  Button,
  Image,
} from "@chakra-ui/react";
import SingleQuestion from "./SingleQuestion";

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
    <Container as="section" maxW="container.lg" pt="100px">
      <Flex justifyContent="space-between" alignItems="center" mb="64px">
        <Heading as="h2" color="primary" fontWeight="semibold" fontSize="48px">
          Frequently asked <br /> Questions
        </Heading>

        <Flex alignItems="center">
          <Text color="#6A6A6A" mr={4} fontSize="short" lineHeight="short">
            Filter by:
          </Text>
          <Menu>
            <MenuButton
              as={Button}
              variant="outline"
              color="primary"
              borderRadius="20px"
              p="17px 24px"
              boxShadow="none"
            >
              {selectedFaq.category}
              <Image
                src="down.svg"
                alt="down"
                h="10px"
                display="inline"
                ml="20px"
              ></Image>
            </MenuButton>
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
