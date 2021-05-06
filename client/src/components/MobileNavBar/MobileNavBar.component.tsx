import React from "react";

import {
  Cross,
  SideNav,
  SideNavButton,
  SideNavSignUpButton,
  SideNavButtonsWrapper,
  SideNavHeader,
} from "./MobileNavBar.styles";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.component";
import cross from "../../assets/Cross.svg";
import { UserPayloadTD } from "../../redux/user/user.payload";

interface MobileNavBarProps {
  setMenuClicked: (value: boolean) => void;
  menuClicked: boolean;
  currentUser: UserPayloadTD | null;
  onClick: () => void;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({
  menuClicked,
  setMenuClicked,
  currentUser,
  onClick,
}) => {
  return (
    <SideNav>
      <SideNavHeader>
        <ThemeSwitch />
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
  );
};

export default MobileNavBar;
