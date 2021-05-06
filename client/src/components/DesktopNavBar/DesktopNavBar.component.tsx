import React from "react";

import { StyledLink, Button, LinksWrapper } from "./DesktopNavBar.styles";
import { UserPayloadTD } from "../../redux/user/user.payload";

interface DesktopNavBarProps {
  currentUser: UserPayloadTD | null;
  onClick: () => void;
}

const DesktopNavBar: React.FC<DesktopNavBarProps> = ({ currentUser, onClick }) => {
  return (
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
  );
};

export default DesktopNavBar;
