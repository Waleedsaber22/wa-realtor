import React, { useState } from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/core";
import { BsFilter } from "react-icons/bs";
import { Property, FilterSearch } from "../components";
import { fetchApi } from "../utils/fetchApi";
import Image from "next/image";
import noresult from "../images/noresult.svg";
const Search = ({ data, purpose }) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <Box>
      <Flex
        justifyContent="center"
        p={10}
        alignItems="center"
        borderBottom="1px solid white"
        onClick={(e) => {
          e.preventDefault();
          setShowFilter((val) => !val);
        }}
        bg="gray.200"
        cursor="pointer"
      >
        <Text fontWeight="bold" fontSize="1.4em" mr={5}>
          Search Property By Filters
        </Text>
        <BsFilter size={30} />
      </Flex>
      <Box>
        <FilterSearch showFilter={showFilter} handleShow={setShowFilter} />
      </Box>
      <Box>
        <Text fontWeight="bold" fontSize="1.4em" p={10}>
          Properties {purpose.toUpperCase()}
        </Text>
      </Box>
      <Flex justifyContent="space-evenly" flexWrap="wrap">
        {data?.map(
          ({
            title,
            price,
            id,
            coverPhoto,
            agency,
            area,
            baths,
            rooms,
            rentFrequency,
            isVerified,
          }) => {
            return (
              <Property
                key={id}
                externalId={id}
                description={title}
                area={area?.toFixed(3)}
                numBath={baths}
                numBed={rooms}
                price={price}
                providerLogo={agency?.logo?.url}
                imageName={coverPhoto?.title}
                urlImage={coverPhoto?.url}
                rentFrequency={`${rentFrequency ? "/" + rentFrequency : ""}`}
                isVerified={isVerified}
              />
            );
          }
        )}
      </Flex>
      {data?.length === 0 && (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={noresult} alt="noResultFounded"></Image>
          <Text fontWeight="black" fontSize="1.5em">
            There&apos;s no property Founded
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const sort = query.sort || "price-desc";
  const rentFrequency = query.rentFrequency || "yearly";
  const priceMin = query.priceMin || "0";
  const priceMax = query.priceMax || "1000000";
  const areaMax = query.areaMax || "35000";
  const bathsMin = query.roomsMax || "0";
  const roomsMin = query.roomsMin || "0";
  const categoryExternalID = query.categoryExternalID || "4";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const data = await fetchApi(
    `locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=100&sort=${sort}&rentfrequeny=${rentFrequency}&priceMin=${priceMin}&priceMax=${priceMax}&areaMax=${areaMax}&bathsMin=${bathsMin}&roomsMin=${roomsMin}&categoryExternalID=${categoryExternalID}`,
    "list"
  );
  return {
    props: { data: data?.hits || [], purpose },
  };
}
