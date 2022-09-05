import { Flex, Box } from "@chakra-ui/core";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex
      height={"100%"}
      borderRight="3px solid transparent"
      justifyContent="center"
      alignItems="center"
    >
      <FaArrowAltCircleLeft
        fill="green"
        opacity="0.5"
        size={25}
        onClick={() => scrollPrev()}
      />
    </Flex>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex
      height={"100%"}
      borderLeft="3px solid transparent"
      justifyContent="center"
      alignItems="center"
    >
      <FaArrowAltCircleRight
        size={25}
        fill="green"
        opacity="0.5"
        onClick={() => scrollNext()}
      />
    </Flex>
  );
};

const ImageScollBar = ({ images }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      wrapperClassName="scroll--wrapper"
    >
      {images.map((image) => (
        <Box className="scroll--item" key={image?.id} itemID={image?.id}>
          <Image
            placeholder="blur"
            blurDataURL={image?.url}
            className="image--scroll"
            width={800}
            height={500}
            sizes="(max-width:661px) 400px"
            alt={image?.id}
            src={image?.url}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ImageScollBar;
