import styled from "styled-components";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 91px;
  align-items: center;
  margin: auto;
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
`;

export const LinksWrapper = styled.div`
  width: 786px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
