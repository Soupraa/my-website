import React from "react";
import { InfoContainer } from "./HomePage.styles";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { Spacer } from "../components/common/styles";
import ExperienceSection from "./sections/ExperienceSection";
import AboutSection from "./sections/AboutSection";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper/ScrollAnimationWrapper";
import ProjectsSection from "./sections/ProjectsSection";
import HeroSection from "./sections/HeroSection";


const HomePage: React.FC = () => {
    return (
        <PageTemplate>
            <HeroSection />
            <InfoContainer>
                <ScrollAnimationWrapper>
                    <AboutSection />
                    <Spacer $space="3rem" />
                    <ExperienceSection />
                </ScrollAnimationWrapper>
            </InfoContainer>
            <ProjectsSection />
        </PageTemplate>
    );
};

export default HomePage;
