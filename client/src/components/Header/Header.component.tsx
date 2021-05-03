import React, { useState } from "react";

import {
  Wrapper,
  StyledLink,
  Button,
  LogoContainer,
  Logo,
  Sun,
  Moon,
  Menu,
  Cross,
  CheckBoxIconsWrapper,
  LinksWrapper,
  SideNav,
  SideNavButton,
  SideNavSignUpButton,
  SideNavButtonsWrapper,
  SideNavHeader,
} from "./Header.styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import logo from "../../assets/Logo.svg";
import sun from "../../assets/SunIcon.svg";
import moon from "../../assets/MoonIcon.svg";
import menu from "../../assets/Menu.svg";
import cross from "../../assets/Cross.svg";
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

  const [menuClicked, setMenuClicked] = useState(false);

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
      {menuClicked ? (
        <SideNav>
          <SideNavHeader>
            <CheckBoxIconsWrapper>
              <Moon src={moon} color={moonColor} />
              <CheckBox onChange={onChange} />
              <Sun src={sun} color={sunColor} />
            </CheckBoxIconsWrapper>

            <Cross src={cross} onClick={() => setMenuClicked(!menuClicked)} />
          </SideNavHeader>
          <SideNavButtonsWrapper>
            <SideNavButton to="/">Designs</SideNavButton>
            <SideNavButton to="/">Submitions</SideNavButton>
            <SideNavButton to="/">pricing</SideNavButton>

            {!currentUser && <SideNavButton to="/login">Log In</SideNavButton>}

            {currentUser ? (
              <SideNavSignUpButton to="/" onClick={onClick}>
                Sign Out
              </SideNavSignUpButton>
            ) : (
              <SideNavSignUpButton to="/signup">Sign Up</SideNavSignUpButton>
            )}
          </SideNavButtonsWrapper>
        </SideNav>
      ) : (
        <Menu src={menu} onClick={() => setMenuClicked(!menuClicked)} />
      )}

      <CheckBoxIconsWrapper>
        <Moon src={moon} color={moonColor} />
        <CheckBox onChange={onChange} />
        <Sun src={sun} color={sunColor} />
      </CheckBoxIconsWrapper>
    </Wrapper>
  );
};

export default Header;
