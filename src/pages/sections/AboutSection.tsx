import React from "react";
import { BigH2, ContentArea, FlexEnd, FlexStart, H1, H2, Paragraph, TitleWidthContainer } from "../../components/common/styles";
import { Title } from "../HomePage.styles";
import { AboutBlock, AboutContainer } from "./Section.styles";
import SkillsBlock from "../../components/SkillsBlock/SkillsBlock";

const AboutSection: React.FC = () => {
    return (
        <>
            <TitleWidthContainer>
                <H1>
                    about
                </H1>
            </TitleWidthContainer>
            <ContentArea>
                <AboutContainer>
                    <AboutBlock>
                        <BigH2>
                            I AM A FRONT-END ENGINEER
                        </BigH2>
                    </AboutBlock>
                    <AboutBlock>
                        <H2>background</H2>
                        <Paragraph>
                            I graduated from RMIT University after completing Bachelor of Software Engineering.
                            <br />
                            <br />
                            As a front-end engineer, I enjoy bridging the gap between engineering and design, combining my technical knowledge and my keen eye for design to create stunning pixel-perfect products.
                        </Paragraph>
                        <H2>skills</H2>
                        <SkillsBlock />
                    </AboutBlock>
                </AboutContainer>
            </ContentArea>
        </>
    )
}
export default AboutSection;