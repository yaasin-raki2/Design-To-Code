import { FC } from "react";

import {
  HomePageWrapper,
  HeroTitle,
  HeroTextWrapper,
  HeroBody,
  Button,
  HeroIllustration,
  HeroSectionWrapper,
} from "./Home.styles";
import heroIllustration from "../../assets/HeroIllustration.svg";

const HomePage: FC = () => {
  return (
    <HomePageWrapper>
      <HeroSectionWrapper>
        <HeroTextWrapper>
          <HeroTitle>We Help You Build Your Next Outstanding Portfolio Project</HeroTitle>
          <HeroBody>
            Build large scale Web / Mobile applications with your favorite technology
            using our own Recources and Case Studies and Design Guides, to sharppen your
            skills and to get an outstanding portfolio project that will eventually
            separate you from the crowd
          </HeroBody>
          <Button to="/">Browse Designs</Button>
        </HeroTextWrapper>
        <HeroIllustration src={heroIllustration} />
      </HeroSectionWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
