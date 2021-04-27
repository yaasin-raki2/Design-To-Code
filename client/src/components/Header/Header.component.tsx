import React from "react";

import { Wrapper, StyledLink, Button } from "./Header.styles";
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
        <Button to="/signout">Sign Out</Button>
      ) : (
        <Button to="/signup">Sign Up</Button>
      )}
    </Wrapper>
  );
};

export default Header;
