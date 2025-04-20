import React from "react";
import { HeadingSection, HomePageContentArea, InfoContainer, Title } from "./HomePage.styles";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { FlexEnd, FlexStart, FullWidthContainer, ParallaxLayer, Spacer, StaticEffectLayer, StaticOverlayWrapper } from "../components/common/styles";
import ExperienceSection from "./sections/ExperienceSection";
import AboutSection from "./sections/AboutSection";
import NavBar from "../components/NavBar/NavBar";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper/ScrollAnimationWrapper";
import test from '../svgs/Untitled.png';
import { ParallaxBanner } from 'react-scroll-parallax';


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
                    <Spacer $space="3rem" />
                    <StaticOverlayWrapper>
                        <ParallaxLayer>
                            <ParallaxBanner
                                style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
                                layers={[{
                                    image: test, speed: -50, translateY: [0, 15],
                                    scale: [1.5, 1, 'easeOutCubic'],
                                    shouldAlwaysCompleteAnimation: true,
                                }]}
                                className="aspect-[2/1]"
                            /></ParallaxLayer>
                        <StaticEffectLayer />
                    </StaticOverlayWrapper>

                    <ExperienceSection />
                    <ExperienceSection />

                    <ExperienceSection />

                </InfoContainer>
            </ScrollAnimationWrapper>
        </PageTemplate>
    );
};

export default HomePage;
