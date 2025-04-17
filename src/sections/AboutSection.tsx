import React from "react";
import { H1, Paragraph } from "../components/common/styles";
import { AboutBlock, AboutContainer, TextBlock, TextTitle } from "./Sections.styles";

const AboutSection: React.FC = () => {
    return (
        <>
            <H1>
                About me
            </H1>
            <AboutContainer>
                <AboutBlock>
                    <TextTitle>
                        INFO
                    </TextTitle>
                    <TextBlock>
                        I graduated from RMIT University after completing Bachelor of Software Engineering.
                        <br/>
                        <br/>
                        As a front-end engineer, I enjoy bridging the gap between engineering and design, combining my technical knowledge and my keen eye for design to create stunning pixel-perfect products.
                    </TextBlock>
                </AboutBlock>
                <AboutBlock>
                    <TextTitle>
                        SKILLS
                    </TextTitle>
                </AboutBlock>
            </AboutContainer>
        </>
    )
}
export default AboutSection;