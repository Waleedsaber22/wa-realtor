import React from "react";
import { Flex, Box, Text } from "@chakra-ui/core";
import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { GoUnverified } from "react-icons/go";
import houseImage from "../images/house.jpg";
import profileLogo from "../images/profileLogo.png";

// import { }from "react-icons"
const property = ({
  urlImage,
  imageName,
  price,
  providerLogo,
  description,
  area,
  numBed,
  numBath,
  rentFrequency,
  externalId,
  isVerified,
}) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
      <Box width={[270, 350, 400]} ml="5px" cursor="pointer">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Image
            style={{ borderRadius: "10px" }}
            alt={imageName}
            src={urlImage || houseImage}
            width={400}
            height={280}
          />
          <Flex
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            pt="5px"
          >
            <Flex alignItems="center">
              {isVerified ? (
                <GoVerified fill="green" style={{ display: "inline-block" }} />
              ) : (
                <GoUnverified fill="red" style={{ display: "inline-block" }} />
              )}
              <Text fontWeight="black" fontSize="lg" as={"span"}>
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
              src={providerLogo || profileLogo}
            />
          </Flex>
          <Box>
            <Text as={"span"}>{numBed} </Text>
            <FaBed style={{ display: "inline-block" }} fill="blue" />
            <Text as={"span"}> | {numBath} </Text>
            <FaBath style={{ display: "inline-block" }} fill="red" />
            <Text as={"span"}> | {area} sqft </Text>
            <BsGridFill style={{ display: "inline-block" }} fill="purple" />
          </Box>
          <Box
            overflow="hidden"
            width="70%"
            paddingTop="5px"
            paddingBottom="5px"
          >
            <Text
              overflow="hidden"
              fontSize="lg"
              style={{ textOverflow: "ellipsis" }}
              whiteSpace="nowrap"
            >
              {description}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};

export default property;
