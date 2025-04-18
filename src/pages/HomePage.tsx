import React from "react";
import { HeadingSection, HomePageContentArea, InfoContainer, Title } from "./HomePage.styles";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { FlexEnd, FlexStart, FullWidthContainer } from "../components/common/styles";
import ExperienceSection from "./sections/ExperienceSection";
import AboutSection from "./sections/AboutSection";
import NavBar from "../components/NavBar/NavBar";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper/ScrollAnimationWrapper";

const HomePage: React.FC = () => {
    return (
        <PageTemplate>
            <HomePageContentArea>
                <NavBar />
                <HeadingSection>
                    <Title>
                        RICHARD GAO
                    </Title>
                </HeadingSection>
                <FullWidthContainer>
                    <FlexStart>
                        BASED IN AUSTRALIA.
                    </FlexStart>
                    <FlexEnd>
                        /// FRONT-END ENGINEER
                    </FlexEnd>
                </FullWidthContainer>
            </HomePageContentArea>
            <ScrollAnimationWrapper>
            <InfoContainer>
                <AboutSection />
                <ExperienceSection />
                <ExperienceSection />
                <ExperienceSection />
            </InfoContainer>
            </ScrollAnimationWrapper>
        </PageTemplate>
    );
};

export default HomePage;
