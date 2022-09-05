import { Flex, Box } from "@chakra-ui/core";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex height={"100%"} justifyContent="center" alignItems="center">
      <FaArrowAltCircleLeft size={25} onClick={() => scrollPrev()} />
    </Flex>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex height={"100%"} justifyContent="center" alignItems="center">
      <FaArrowAltCircleRight size={25} onClick={() => scrollNext()} />
    </Flex>
  );
};

const ImageScollBar = ({ images }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {images.map((image) => (
        <Box
          width={["300px", "600px", "1200px"]}
          key={image?.id}
          itemID={image?.id}
        >
          <Image
            placeholder="blur"
            blurDataURL={image?.url}
            width={900}
            height={500}
            sizes="(min-width:300px) 300px, (min-width:660px) 400px, 1000px"
            quality={75}
            alt={image?.id}
            src={image?.url}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ImageScollBar;
