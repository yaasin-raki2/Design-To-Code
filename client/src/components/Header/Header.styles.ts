import styled from "styled-components";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

import { CheckBoxWrapper } from "../CheckBox/CheckBox.styles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 91px;
  align-items: center;
  margin: auto;

  @media (max-width: 600px) {
    width: 364px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

export const Button = styled(Link)`
  background-color: ${({ theme }) => theme.primary};
  width: 93px;
  height: 39px;
  padding: 10px 15px;
  border-radius: 10px;
  transition: 0.5s;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    filter: brightness(120%);
  }

  :active {
    transform: scale(0.5);
  }
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

export const Moon = styled(SVG)<{ color: string }>`
  & path {
    fill: ${(props) => props.color};
  }
`;

export const Sun = styled(SVG)<{ color: string }>`
  & path {
    fill: ${(props) => props.color};
  }
`;

export const CheckBoxIconsWrapper = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  width: 786px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Menu = styled(SVG)`
  display: none;
  cursor: pointer;

  @media (max-width: 600px) {
    display: block;
  }
`;

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

  ${CheckBoxIconsWrapper} {
    display: flex;
    width: 101px;

    ${Moon}, ${Sun} {
      width: 19px;
      height: 21px;
    }

    ${CheckBoxWrapper} {
      width: 39px;
      height: 23px;
    }
  }
`;
