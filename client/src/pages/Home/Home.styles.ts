import styled from "styled-components";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

export const HomePageWrapper = styled.div`
  width: 1233px;
  margin: 50px auto 0 auto;

  @media (max-width: 600px) {
    width: 364px;
    margin: 20px auto 0 auto;
  }
`;

export const HeroSectionWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "hero-title hero-illustration"
    "hero-body hero-illustration"
    "hero-button hero-illustration";
  height: 575px;

  @media (max-width: 1300px) {
    height: 454px;
    width: 1037px;
    margin: auto;
  }

  @media (max-width: 600px) {
    grid-template-areas:
      "hero-title"
      "hero-illustration"
      "hero-body "
      "hero-button";
    width: auto;
    height: 657px;
  }
`;

export const HeroTitle = styled.h1`
  grid-area: hero-title;
  margin: 0;
  font-weight: 600;
  font-size: 60px;
  line-height: 90px;
  width: 724px;
  height: 270px;
  color: ${({ theme }) => theme.text};

  @media (max-width: 1300px) {
    width: 513px;
    height: 180px;
    font-size: 40px;
    line-height: 60px;
  }

  @media (max-width: 600px) {
    width: 364px;
    height: 144px;
    font-size: 30px;
    text-align: center;
    line-height: 45px;
    margin: auto;
  }
`;

export const HeroBody = styled.p`
  grid-area: hero-body;
  width: 527px;
  height: 135px;
  position: relative;

  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  margin: 0;

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

  @media (max-width: 600px) {
    width: 364px;
    height: 144px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    margin: auto;

    ::before {
      content: none;
    }
  }
`;

export const HeroButton = styled(Link)`
  grid-area: hero-button;
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

  :hover {
    filter: brightness(120%);
  }

  :active {
    transform: scale(0.5);
  }

  @media (max-width: 600px) {
    margin: auto;
  }
`;

export const HeroIllustration = styled(SVG)`
  grid-area: hero-illustration;
  margin-top: 18px;

  @media (max-width: 1300px) {
    width: 395px;
    height: 432px;
  }

  @media (max-width: 600px) {
    width: 202px;
    height: 221px;
    margin: auto;
  }
`;
