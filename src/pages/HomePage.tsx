import React, { useEffect, useState } from "react";
import { HeadingSection, HeadingText, HomePageContentArea, InfoContainer, Title } from "./HomePage.styles";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { ContentArea, FlexEnd, FlexStart, H2, Paragraph } from "../components/common/styles";
import ExperienceSection from "./sections/ExperienceSection";
import AboutSection from "./sections/AboutSection";
import NavBar from "../components/NavBar/NavBar";
import { NavBarContainer } from "../components/NavBar/NavBar.styles";

const HomePage: React.FC = () => {
    const navigate = useNavigate(); // Get the navigate function

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <PageTemplate>  
            <HomePageContentArea>
              <NavBar/>
                <HeadingSection>  
                    <Title>
                        RICHARD GAO
                    </Title>
                    {/* <H2>FRONT-END ENGINEER</H2> */}
                    <HeadingText>
                    <Paragraph>
                        I'm a developer passionate about building accessible, user-focused web applications through thoughtful and innovative engineering.
                        I love crafting delightful digital experiences and am always eager to take on new challenges.
                    </Paragraph>
                    </HeadingText>
                </HeadingSection>
                <NavBarContainer>
                    <FlexStart>
                        BASED IN AUSTRALIA.
                    </FlexStart>
                    <FlexEnd>
                        /// FRONT-END ENGINEER
                    </FlexEnd>
                </NavBarContainer>
            </HomePageContentArea>
            <InfoContainer>
                <ContentArea>
                <AboutSection />
                <ExperienceSection />
                </ContentArea>
            </InfoContainer>
        </PageTemplate>
    );
};

export default HomePage;
