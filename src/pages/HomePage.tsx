import React, { useEffect, useState } from "react";
import { ContentArea, HeadingSection, InfoPanel, Title } from "./HomePage.styles";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { H2, NavButton, Paragraph } from "../components/common/styles";
import ExperienceSection from "../sections/ExperienceSection";
import AboutSection from "../sections/AboutSection";

const HomePage: React.FC = () => {
    const navigate = useNavigate(); // Get the navigate function
    const [slide, setSlide] = useState(false);

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <PageTemplate>
            <ContentArea>
                <HeadingSection slide={slide}>
                    <Title>
                        Richard Gao
                    </Title>
                    <H2>Front-end Engineer</H2>
                    <Paragraph>
                        I'm a developer passionate about building accessible, user-focused web applications through thoughtful and innovative engineering.
                        I love crafting delightful digital experiences and am always eager to take on new challenges.
                    </Paragraph>
                    <NavButton onClick={() => setSlide(!slide)}>LEARN MORE</NavButton>
                </HeadingSection>
                {slide && (
                    <InfoPanel slide={slide}>
                        <AboutSection />
                        <ExperienceSection />
                        <ExperienceSection />
                        <ExperienceSection />
                    </InfoPanel>
                )}

            </ContentArea>
        </PageTemplate>
    );
};

export default HomePage;
