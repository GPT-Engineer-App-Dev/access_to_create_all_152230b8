import React, { useState } from "react";
import { Box, VStack, Button, Icon, Collapse } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { FaHome, FaClipboardList, FaCoffee, FaUtensils, FaPlus, FaBars } from "react-icons/fa";

const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Button onClick={toggleSidebar}>
        <Icon as={FaBars} />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box w="200px" bg="gray.400" color="white" p={4}>
          <VStack align="stretch" spacing={4}>
            <Button variant="ghost" leftIcon={<Icon as={FaHome} />} onClick={() => navigate("/")}>
              Menus
            </Button>
            <Button variant="ghost" leftIcon={<Icon as={FaClipboardList} />} onClick={() => navigate("/products")}>
              Products
            </Button>
            <Button variant="ghost" leftIcon={<Icon as={FaCoffee} />} onClick={() => navigate("/modifiers")}>
              Modifiers
            </Button>
            <Button variant="ghost" leftIcon={<Icon as={FaUtensils} />} onClick={() => navigate("/allergens")}>
              Allergens
            </Button>
            <Button variant="ghost" leftIcon={<Icon as={FaPlus} />} onClick={() => navigate("/create-allergen")}>
              Create Allergen
            </Button>
            <Button variant="ghost" leftIcon={<Icon as={FaPlus} />} onClick={() => navigate("/create-modifier")}>
              Create Modifier
            </Button>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navigation; // Don't forget to export the component
