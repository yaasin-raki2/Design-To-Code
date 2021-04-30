import React, { useState } from "react";

import {
  Wrapper,
  StyledLink,
  Button,
  LogoContainer,
  Logo,
  Sun,
  Moon,
  CheckBoxIconsWrapper,
  LinksWrapper,
} from "./Header.styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import logo from "../../assets/Logo.svg";
import sun from "../../assets/SunIcon.svg";
import moon from "../../assets/MoonIcon.svg";
import CheckBox from "../CheckBox/CheckBox.component";

const Header: React.FC = () => {
  const { signout, setLightTheme, setDarkTheme } = useActions();

  const currentUser = useTypedSelector((state) => state.user.currentUser);

  const onClick = () => {
    signout();
  };

  const [sunColor, setSunColor] = useState("#FAFF00");
  const [moonColor, setMoonColor] = useState("#D1D1D1");

  const onChange = (checked: HTMLInputElement["checked"]) => {
    if (checked) {
      setLightTheme();
      setSunColor("#FAFF00");
      setMoonColor("#D1D1D1");
    } else {
      setDarkTheme();
      setSunColor("#D1D1D1");
      setMoonColor("#8443D8");
    }
  };

  return (
    <Wrapper>
      <LogoContainer to="/">
        <Logo src={logo} />
      </LogoContainer>

      <LinksWrapper>
        <StyledLink to="/">Designs</StyledLink>
        <StyledLink to="/">Submitions</StyledLink>
        <StyledLink to="/">pricing</StyledLink>

        {!currentUser && <StyledLink to="/login">Log In</StyledLink>}

        {currentUser ? (
          <StyledLink to="/" onClick={onClick}>
            Sign Out
          </StyledLink>
        ) : (
          <Button to="/signup">Sign Up</Button>
        )}
      </LinksWrapper>

      <CheckBoxIconsWrapper>
        <Moon src={moon} color={moonColor} />
        <CheckBox onChange={onChange} />
        <Sun src={sun} color={sunColor} />
      </CheckBoxIconsWrapper>
    </Wrapper>
  );
};

export default Header;
