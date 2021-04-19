import React from "react";

import { Wrapper, StyledLink } from "./Header.styles";
import Button from "../Button/Button.component";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/">Designs</StyledLink>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/" color="#0E70F3">
        Log In
      </StyledLink>
      <Button to="/">Sign Up</Button>
    </Wrapper>
  );
};

export default Header;
