import React from "react";
import Image from "next/image";
import { Box, Text, Flex, Button } from "@chakra-ui/core";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

const Banner = ({ imageUrl, altImage, purpose, title, linkName }) => {
  const isLarge = useMediaQuery("(min-width:1128px)");
  return (
    <Flex
      p="30px"
      justifyContent="space-around"
      alignItems="center"
      flexWrap="wrap"
    >
      <Image
        style={{ borderRadius: "20px" }}
        src={imageUrl}
        alt={altImage}
        width={550}
        height={300}
      />
      <Box w={isLarge ? "fit-content" : "85%"} maxWidth={"100%"}>
        <Text
          fontSize={["sm", "lg", "xl"]}
          color="#718096"
          p="10px"
          fontWeight="black"
          mt="15px"
        >
          {purpose.toUpperCase()} a Home
        </Text>
        <Text
          fontSize={["lg", "2xl", "4xl"]}
          color="black"
          fontWeight="bold"
          w={"400px"}
          maxWidth={"100%"}
          p="10px"
        >
          {title}
        </Text>
        <Text fontSize={["xl", "2xl", "3xl"]} paddingBlock="3" p="10px">
          Explore from Apartments, land, builder floors,
          <br /> villas and more
        </Text>
        <Link href={linkName} padding={10}>
          <Button
            backgroundColor="blue.700"
            borderRadius="md"
            ml="auto"
            display="block"
            color="white"
            width="50%"
            minWidth="fit-content"
            p="10px"
            _hover={{ backgroundColor: "red", color: "blue" }}
          >
            {`Explore ${purpose}ing`}
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Banner;
