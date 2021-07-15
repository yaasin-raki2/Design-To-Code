import React, { FC } from "react";

import {
  HomePageWrapper,
  HeroTitle,
  HeroBody,
  HeroButton,
  HeroIllustration,
  HeroSectionWrapper,
} from "./Home.styles";
import heroIllustration from "../../assets/HeroIllustration.svg";

const HomePage: FC = () => {
  return (
    <HomePageWrapper>
      <HeroSectionWrapper>
        <HeroTitle>We Help You Build Your Next Outstanding Portfolio Project</HeroTitle>
        <HeroBody>
          Build large scale Web / Mobile applications with your favorite technology using
          our own Recources and Case Studies and Design Guides, to sharppen your skills
          and to get an outstanding portfolio project that will eventually separate you
          from the crowd
        </HeroBody>
        <HeroButton to="/">Browse Designs</HeroButton>
        <HeroIllustration src={heroIllustration} />
      </HeroSectionWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
