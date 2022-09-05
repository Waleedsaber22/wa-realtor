import React from "react";
import Image from "next/image";
import { Flex, Box, Avatar, Text } from "@chakra-ui/core";
import { fetchApi } from "../../utils/fetchApi";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { GoUnverified } from "react-icons/go";
import { ImageScollBar } from "../../components";
import profileLogo from "../../images/profileLogo.png";
const Property = ({ data }) => {
  const {
    description,
    title,
    title_l1,
    description_l1,
    category,
    photos,
    isVerified,
    type,
    price,
    agency,
    rentFrequency,
    rooms: numBed,
    baths: numBath,
    area: area,
    product,
  } = data;

  return (
    <Box>
      <Flex justifyContent="space-around" alignItems="center" flexWrap="wrap">
        <Text fontSize={["14px", "lg", "2xl"]} fontWeight="black">
          {title}
        </Text>
        <Text fontSize={["10px", "lg", "2xl"]}>{title_l1}</Text>
      </Flex>
      {photos?.length !== 0 && <ImageScollBar images={photos} />}
      <Box>
        <Flex justifyContent="space-around" alignItems="center" flexWrap="wrap">
          <Text
            p={3}
            m={3}
            fontSize={["14px", "lg", "xl"]}
            borderRadius="7px"
            bg="gray.400"
          >
            {description}
          </Text>
          <Text
            p={description_l1 === description ? 0 : 3}
            m={3}
            fontSize={["14px", "lg", "xl"]}
            borderRadius="7px"
            bg="gray.400"
          >
            {description_l1 === description ? "" : description_l1}
          </Text>
        </Flex>
        <Box>
          <Flex
            width="100%"
            justifyContent="flex-start"
            alignItems="center"
            flexWrap="wrap"
            p={3}
          >
            <Flex alignItems="center">
              {isVerified ? (
                <GoVerified fill="green" style={{ display: "inline-block" }} />
              ) : (
                <GoUnverified fill="red" style={{ display: "inline-block" }} />
              )}
              <Text fontWeight="black" fontSize="lg" as={"span"} mr={3}>
                {" "}
                &nbsp; AED {price}
                {rentFrequency || ""}
              </Text>
            </Flex>
            <Image
              alt="Photo"
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
              src={agency?.logo?.url || profileLogo}
            />
          </Flex>
          <Box p={3}>
            <Text as={"span"}>{numBed} </Text>
            <FaBed style={{ display: "inline-block" }} fill="blue" />
            <Text as={"span"}> | {numBath} </Text>
            <FaBath style={{ display: "inline-block" }} fill="red" />
            <Text as={"span"}> | {area} sqft </Text>
            <BsGridFill style={{ display: "inline-block" }} fill="purple" />
          </Box>
        </Box>
        <Box>
          <Flex flexWrap="wrap" justifyContent="space-between" bg="gray.300">
            {type && (
              <Flex
                minWidth={"45%"}
                justifyContent="space-between"
                alignItems="center"
                bg="blue.100"
                padding={3}
              >
                <Text fontWeight="bold">type</Text>
                <Text color="blue.300" fontWeight="black">
                  {type}
                </Text>
              </Flex>
            )}
            {category?.length !== 0 && category && (
              <Flex
                bg="blue.100"
                minWidth={"45%"}
                justifyContent="space-between"
                alignItems="center"
                padding={3}
              >
                <Text fontWeight="bold">category</Text>
                {category?.map(({ name, id }) => (
                  <Text key={id} color="blue.300" fontWeight="black">
                    {name}
                  </Text>
                ))}
              </Flex>
            )}
            {product && (
              <Flex
                bg="blue.100"
                minWidth={"45%"}
                justifyContent="space-between"
                alignItems="center"
                padding={3}
              >
                <Text>product</Text>
                <Text color="blue.300" fontWeight="black">
                  {product}
                </Text>
              </Flex>
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Property;

export async function getServerSideProps({ query: { propertyid } }) {
  const data = await fetchApi(`externalID=${propertyid}`, "detail");
  return {
    props: { data: data ? data : {} },
  };
}
