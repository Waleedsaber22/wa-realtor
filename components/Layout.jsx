import React from "react";
import { Box } from "@chakra-ui/core";
const Layout = ({ children }) => {
  return (
    <Box
      bgImage="linear-gradient(to top,#ffd7d77d,white,#ffd7d77d,white,#ffd7d77d,white)"
      className="app--container"
    >
      {children}
    </Box>
  );
};

export default Layout;
