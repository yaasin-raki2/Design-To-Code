import styled from "styled-components";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

import { ThemeSwitchWrapper } from "../ThemeSwitch/ThemeSwitch.styles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 91px;
  align-items: center;
  margin: auto;

  @media (max-width: 600px) {
    width: 364px;
  }

  & > ${ThemeSwitchWrapper} {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

export const LogoContainer = styled(Link)``;

export const Logo = styled(SVG)`
  & path {
    fill: ${({ theme }) => theme.text};
  }

  @media (max-width: 600px) {
    width: 85px;
    height: 17px;
  }
`;

export const Menu = styled(SVG)`
  display: none;
  cursor: pointer;

  @media (max-width: 600px) {
    display: block;
  }
`;
