import React from "react";
import { Box, Flex, Text } from "@chakra-ui/core";
import { AiOutlineApple } from "react-icons/ai";
const Footer = () => {
  return (
    <Box p="20px">
      <Flex justifyContent="center" alignItems="center">
        <Text color="#718593" fontSize="2xl">
          © 2022 Realtor
        </Text>
        <AiOutlineApple size={25} fill="#718593" />
        <Text color="#718593" fontSize="2xl">
          Waleed
        </Text>
        <AiOutlineApple size={25} fill="#718593" />
      </Flex>
    </Box>
  );
};

export default Footer;
