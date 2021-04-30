import React from "react";

import { Wrapper, StyledLink, Button, LogoContainer, Logo } from "./Header.styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import logo from "../../assets/Logo.svg";
import CheckBox from "../CheckBox/CheckBox.component";

const Header: React.FC = () => {
  const { signout, setLightTheme, setDarkTheme } = useActions();

  const currentUser = useTypedSelector((state) => state.user.currentUser);

  const onClick = () => {
    signout();
  };

  const onChange = (checked: HTMLInputElement["checked"]) => {
    checked ? setLightTheme() : setDarkTheme();
  };

  return (
    <Wrapper>
      <LogoContainer to="/">
        <Logo src={logo} />
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

      <CheckBox onChange={onChange} />
    </Wrapper>
  );
};

export default Header;
