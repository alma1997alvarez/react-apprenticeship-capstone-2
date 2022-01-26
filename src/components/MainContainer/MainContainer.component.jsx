import React from "react";
import { Heading, LayoutContainer } from "./MainContainer.styled";

const MainContainer = ({ heading = "", children = {} }) => {
  return (
    <LayoutContainer>
      <Heading>{heading}</Heading>
      {children}
    </LayoutContainer>
  );
};

export default MainContainer;
