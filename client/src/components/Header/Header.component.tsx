import React from "react";

import { Wrapper, StyledLink, Button, LogoContainer } from "./Header.styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const Header: React.FC = () => {
  const { signout } = useActions();

  const currentUser = useTypedSelector((state) => state.user.currentUser);

  const onClick = () => {
    signout();
  };

  return (
    <Wrapper>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

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
