import React, { useEffect, useState } from "react";
import { HeadingSection, Title } from "./HomePage.styles";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { ContentArea, H2, Paragraph } from "../components/common/styles";
import ExperienceSection from "./sections/ExperienceSection";
import AboutSection from "./sections/AboutSection";

const HomePage: React.FC = () => {
    const navigate = useNavigate(); // Get the navigate function

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <PageTemplate>
            <ContentArea>
                <HeadingSection>
                    <Title>
                        Richard Gao
                    </Title>
                    {/* <NavButton onClick={handleClick}>LEARN MORE</NavButton> */}
                    <H2>Front-end Engineer</H2>
                    <Paragraph>
                        I'm a developer passionate about building accessible, user-focused web applications through thoughtful and innovative engineering.
                        I love crafting delightful digital experiences and am always eager to take on new challenges.
                    </Paragraph>
                </HeadingSection>
                <AboutSection />
                <ExperienceSection />
            </ContentArea>
        </PageTemplate>
    );
};

export default HomePage;
