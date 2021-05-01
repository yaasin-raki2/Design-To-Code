import styled from "styled-components";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

export const HomePageWrapper = styled.div`
  width: 1229px;
  height: 521px;
  margin: 50px auto 0 auto;
`;

export const HeroSectionWrapper = styled.div`
  display: flex;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 60px;
  line-height: 90px;
  width: 724px;
  height: 270px;
  color: ${({ theme }) => theme.text};
`;

export const HeroBody = styled.p`
  width: 527px;
  height: 135px;
  position: relative;

  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  margin-top: 28px;

  color: ${({ theme }) => theme.text};

  ::before {
    content: "";
    position: absolute;
    width: 103px;
    height: 9px;
    border-radius: 20px;
    top: -17px;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const HeroTextWrapper = styled.div``;

export const Button = styled(Link)`
  background-color: ${({ theme }) => theme.primary};
  width: 279px;
  height: 60px;
  border-radius: 10px;
  transition: 0.5s;
  color: #000;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin-top: 44px;

  :hover {
    filter: brightness(120%);
  }

  :active {
    transform: scale(0.5);
  }
`;

export const HeroIllustration = styled(SVG)`
  margin-top: 18px;
`;
