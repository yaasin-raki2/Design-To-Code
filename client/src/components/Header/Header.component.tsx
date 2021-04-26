import React from "react";

import { Wrapper, StyledLink } from "./Header.styles";
import LinkButton from "../LinkButton/LinkButton.component";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Header: React.FC = () => {
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/">Designs</StyledLink>
      <StyledLink to="/">Dashboard</StyledLink>
      {!currentUser && (
        <StyledLink to="/login" color="#0E70F3">
          Log In
        </StyledLink>
      )}
      {currentUser ? (
        <LinkButton to="/signout">Sign Out</LinkButton>
      ) : (
        <LinkButton to="/signup">Sign Up</LinkButton>
      )}
    </Wrapper>
  );
};

export default Header;
