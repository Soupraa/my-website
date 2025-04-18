import React from "react";
import { BigH2, ContentArea,H1, H2, Paragraph, ParagraphBold, Spacer, TitleWidthContainer } from "../../components/common/styles";
import { AboutBlock, AboutContainer } from "./Section.styles";
import SkillsBlock from "../../components/SkillsBlock/SkillsBlock";
import ScrollAnimationWrapper from "../../components/ScrollAnimationWrapper/ScrollAnimationWrapper";

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
                        <ScrollAnimationWrapper>
                            <BigH2>
                                I AM A FRONT-END ENGINEER
                            </BigH2>
                        </ScrollAnimationWrapper>
                    </AboutBlock>
                    <AboutBlock>
                    <ScrollAnimationWrapper>

                        <H2>background</H2>
                        <Paragraph>
                            I graduated from <ParagraphBold>RMIT University</ParagraphBold> after completing a <ParagraphBold>Bachelor of Software Engineering.</ParagraphBold>
                            <br />
                            <br />
                            As a <ParagraphBold>Front-end Engineer</ParagraphBold>, I enjoy bridging the gap between engineering and design, combining my technical knowledge and my keen eye for design to create stunning pixel-perfect products.
                            <br />
                            <br />
                            Currently a full-stack Software Engineer at <ParagraphBold>National Australia Bank</ParagraphBold>, specialising in front-end web development. I contribute to the creation and maintenance of pilot projects ensuring
                            our platforms meet best practices to deliever a user-centric experience.
                        </Paragraph>
                        <Spacer $space="3rem" />
                        <H2>skills</H2>
                        <SkillsBlock />
                        <Spacer $space="1rem" />
                        </ScrollAnimationWrapper>
                    </AboutBlock>
                </AboutContainer>
            </ContentArea>
        </>
    )
}
export default AboutSection;