import React from "react";
import { HeadingSection, HomePageContentArea, Title } from "../HomePage.styles";
import NavBar from "../../components/NavBar/NavBar";
import { FlexEnd, FlexStart, FullWidthContainer } from "../../components/common/styles";
const HeroSection: React.FC = () => {
    return (
        <header>
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
                        FRONT-END ENGINEER.
                    </FlexEnd>
                </FullWidthContainer>
            </HomePageContentArea>
        </header>
    )
}
export default HeroSection;