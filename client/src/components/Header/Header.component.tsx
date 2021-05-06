import React, { useState } from "react";

import { Wrapper, LogoContainer, Logo, Menu } from "./Header.styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import logo from "../../assets/Logo.svg";
import menu from "../../assets/Menu.svg";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.component";
import MobileNavBar from "../MobileNavBar/MobileNavBar.component";
import DesktopNavBar from "../DesktopNavBar/DesktopNavBar.component";

const Header: React.FC = () => {
  const { signout } = useActions();

  const currentUser = useTypedSelector((state) => state.user.currentUser);

  const onClick = () => {
    signout();
  };

  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <Wrapper>
      <LogoContainer to="/">
        <Logo src={logo} />
      </LogoContainer>

      <DesktopNavBar currentUser={currentUser} onClick={onClick} />

      {menuClicked ? (
        <MobileNavBar
          setMenuClicked={setMenuClicked}
          menuClicked={menuClicked}
          currentUser={currentUser}
          onClick={onClick}
        />
      ) : (
        <Menu src={menu} onClick={() => setMenuClicked(!menuClicked)} />
      )}

      <ThemeSwitch />
    </Wrapper>
  );
};

export default Header;
