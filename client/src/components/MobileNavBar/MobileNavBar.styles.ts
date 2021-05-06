import styled from "styled-components";
import SVG from "react-inlinesvg";

import { Button } from "../DesktopNavBar/DesktopNavBar.styles";

export const SideNav = styled.div`
  position: absolute;
  width: 70vw;
  height: 100%;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.background};

  animation-duration: 2s;
  animation-name: open;

  @keyframes open {
    0% {
      width: 0vw;
    }

    100% {
      width: 70vw;
    }
  }
`;

export const SideNavButton = styled(Button)`
  width: 158px;
  height: 45px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  margin-bottom: 50px;
  color: ${({ theme }) => theme.text};
`;

export const SideNavSignUpButton = styled(Button)`
  width: 158px;
  height: 45px;
`;

export const SideNavButtonsWrapper = styled.div`
  width: 158px;
  height: 425px;
  margin: auto;
  margin-top: 100px;
`;

export const Cross = styled(SVG)`
  cursor: pointer;
`;

export const SideNavHeader = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  align-items: center;
`;
