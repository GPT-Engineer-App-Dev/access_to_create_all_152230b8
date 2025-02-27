import { Box, Button, Container, Flex, Heading, List, ListItem, Text, useToast, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { FaPlus, FaSearch } from "react-icons/fa";
import Navigation from "../components/Navigation";

const Index = () => {
  // Dummy data to simulate API response
  const menus = [
    {
      id: "1",
      name: "Breakfast Specials",
      productCount: 5,
    },
    {
      id: "2",
      name: "Lunch Favorites",
      productCount: 8,
    },
    {
      id: "3",
      name: "Dinner Picks",
      productCount: 7,
    },
  ];

  const toast = useToast();

  // Function to simulate creating a new menu
  const createNewMenu = () => {
    // Here you would normally make an API POST request to create a new menu
    // For now, let's just show a toast notification
    toast({
      title: "New Menu Created",
      description: "A new menu has been added to the list.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex h="100vh">
      <Navigation />
      <Container maxW="container.xl" p={4}>
        <Flex justifyContent="space-between" align="center" mb={4}>
          <Heading as="h1" size="lg">
            Menus
          </Heading>
          <InputGroup w="300px">
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input placeholder="Search menus" />
          </InputGroup>
        </Flex>
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={createNewMenu} mb={4}>
          Crea nuovo menu
        </Button>
        <List spacing={3}>
          {menus.map((menu) => (
            <ListItem key={menu.id} p={3} bg="gray.100" d="flex" justifyContent="space-between" alignItems="center">
              <Text fontWeight="semibold">{menu.name}</Text>
              <Text color="gray.600">{menu.productCount} products</Text>
            </ListItem>
          ))}
        </List>
      </Container>
    </Flex>
  );
};

export default Index;
