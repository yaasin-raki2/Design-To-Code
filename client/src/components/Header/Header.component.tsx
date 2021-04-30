import React from "react";

import { Wrapper, StyledLink, Button } from "./Header.styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const Header: React.FC = () => {
  const { signout } = useActions();

  const currentUser = useTypedSelector((state) => state.user.currentUser);

  const onClick = () => {
    signout();
  };

  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/">Designs</StyledLink>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/">profile</StyledLink>

      {!currentUser && <StyledLink to="/login">Log In</StyledLink>}

      {currentUser ? (
        <Button to="/" onClick={onClick}>
          Sign Out
        </Button>
      ) : (
        <Button to="/signup">Sign Up</Button>
      )}
    </Wrapper>
  );
};

export default Header;
