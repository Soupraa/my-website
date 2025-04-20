import React from "react";
import { BigH2, ContentArea, H1, H2, Paragraph, ParagraphBold, ParagraphLink, Spacer, TitleWidthContainer } from "../../components/common/styles";
import { AboutBlock, AboutContainer, InnerBlock } from "./Section.styles";
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
                            <InnerBlock>
                                <H2>background</H2>
                                <Paragraph>
                                    I graduated from <ParagraphLink href="https://www.rmit.edu.au/" target="_blank">RMIT University</ParagraphLink> after completing a <ParagraphBold>Bachelor of Software Engineering.</ParagraphBold>
                                    <br />
                                    <br />
                                    As a <ParagraphBold>Front-end Engineer</ParagraphBold>, I enjoy bridging the gap between engineering and design, combining my technical knowledge and my keen eye for design to create stunning pixel-perfect products.
                                    <br />
                                    <br />
                                    Currently a full-stack Software Engineer at <ParagraphLink href="https://www.nab.com.au" target="_blank">National Australia Bank</ParagraphLink>, specialising in front-end web development. I contribute to the creation and maintenance of pilot projects ensuring
                                    our platforms meet best practices to deliever a user-centric experience.
                                </Paragraph>
                                <Spacer $space="3rem" />
                                <H2>skills</H2>
                                <SkillsBlock />
                            </InnerBlock>
                            <Spacer $space="1rem" />
                        </ScrollAnimationWrapper>
                    </AboutBlock>
                </AboutContainer>
            </ContentArea>
        </>
    )
}
export default AboutSection;