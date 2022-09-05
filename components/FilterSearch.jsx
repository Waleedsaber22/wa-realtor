import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Select, Button } from "@chakra-ui/core";
import { filterData } from "../utils/filterData";
import { useRouter } from "next/router";
const FilterSearch = ({ showFilter }) => {
  const router = useRouter();
  const filterElement = useRef(null);
  const [height, setHeight] = useState("unset");
  const [screenWidth, setScreenWidth] = useState(0);
  const [filterSearch, setFilterSearch] = useState({
    purpose: "",
    rentFrequency: "",
    categoryExternalID: "",
    priceMin: "",
    priceMax: "",
    areaMax: "",
    roomsMin: "",
    bathsMin: "",
    sort: "",
    locationExternalIDs: "",
  });
  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  });
  useEffect(() => {
    setHeight(filterElement?.current?.offsetHeight);
  }, [screenWidth]);
  function handleChangeFilter({ queryName, queryValue }) {
    const query = router?.query;
    const pathname = router?.pathname;
    query[queryName] = queryValue;
    if (queryValue) delete query?.[queryName];
    router.push({ pathname, query });
  }
  return (
    <Box
      h={!showFilter ? "0px" : height}
      overflow="hidden"
      transition="height 0.4s ease"
      position={"absolute"}
      zIndex={1}
    >
      <Flex
        ref={filterElement}
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        bg="blue.300"
      >
        {filterData?.map(({ placeholder, queryName, items }) => (
          <Select
            key={queryName}
            mb={3}
            mt={3}
            value={filterSearch[queryName]}
            variant="filled"
            bg="#EDF2F7"
            w={["48%", "30%", "18%"]}
            placeholder={placeholder}
            onChange={(e) => {
              setFilterSearch((val) => ({
                ...val,
                [queryName]: e.target.value,
              }));
            }}
          >
            {items?.map(({ name, value }) => (
              <option
                style={{ backgroundColor: "#EDF2F7" }}
                key={name}
                value={value}
              >
                {value}
              </option>
            ))}
          </Select>
        ))}
        <Button
          w={["48%", "30%", "18%"]}
          bg="blue.400"
          color="white"
          marginLeft="10px"
          fontSize={20}
          mb={3}
          mt={3}
          onClick={() => {
            setFilterSearch({
              purpose: "",
              rentFrequency: "",
              categoryExternalID: "",
              priceMin: "",
              priceMax: "",
              areaMax: "",
              roomsMin: "",
              bathsMin: "",
              sort: "",
              locationExternalIDs: "",
            });
            router.push({
              pathname: router?.pathname,
            });
          }}
        >
          Reset
        </Button>
      </Flex>
    </Box>
  );
};

export default FilterSearch;
