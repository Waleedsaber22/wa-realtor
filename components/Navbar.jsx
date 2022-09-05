import React from "react";
import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from "@chakra-ui/core";
import { FcMenu, FcAbout, FcHome, FcKey } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
const Navbar = () => {
  return (
    <Box borderBottom="solid 1.3px #fff" p="20px" bg="#fff2ed">
      <Flex justifyContent="space-between" alignItems="center">
        <Link href="/" passHref>
          <Text
            cursor="pointer"
            color="blue.400"
            fontWeight="bold"
            fontSize="3xl"
          >
            Realtor
          </Text>
        </Link>
        <Menu>
          <MenuButton as={IconButton} icon={FcMenu} />
          <MenuList zIndex={2} left="-15px !important">
            <Link href="/">
              <MenuItem icon={FcHome}>
                <FcHome /> &nbsp; HOME
              </MenuItem>
            </Link>
            <Link href="/search">
              <MenuItem icon={BsSearch}>
                <BsSearch /> &nbsp; Search
              </MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale">
              <MenuItem icon={FcAbout}>
                <FcAbout /> &nbsp; Buy property
              </MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent">
              <MenuItem icon={FcKey}>
                <FcKey /> &nbsp; Rent Property
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
