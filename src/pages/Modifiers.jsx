import { Box, Heading, Button, Flex, InputGroup, InputLeftElement, Input, Icon, Table, Thead, Tbody, Tr, Th, Td, FormControl, FormLabel, Select, Checkbox, VStack, HStack, NumberInput, NumberInputField } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import Navigation from "../components/Navigation";

const Modifiers = () => {
  const navigate = useNavigate();
  // Dummy data for Modifier
  const modifiers = [
    {
      id: "1",
      name: "Dairy Options",
      type: "Single Select",
      products: "5",
      status: "Active",
    },
  ];

  return (
    <Flex h="100vh">
      <Navigation />
      <Box flex="1" p={6}>
        <Heading as="h1" size="lg" mb={4}>
          Modifiers
        </Heading>
        <Flex justifyContent="space-between" align="center" mb={4}>
          <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={() => navigate("/create-modifier")}>
            Create New Modifier
          </Button>
          <InputGroup w="300px">
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input placeholder="Search modifiers" />
          </InputGroup>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Tipologia</Th>
              <Th>Prodotti associati</Th>
              <Th>Stato</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {modifiers.map((modifier) => (
              <Tr key={modifier.id}>
                <Td>{modifier.name}</Td>
                <Td>{modifier.type}</Td>
                <Td>{modifier.products}</Td>
                <Td>{modifier.status}</Td>
                <Td>
                  <Button size="sm" colorScheme="red" onClick={() => {}}>
                    <Icon as={FaTrash} />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Modifiers;
