import React from "react";
import { BigH2, ButtonsContainer, CommonButton, ContainerLarge, ContentArea, H2, H3, Paragraph, ParagraphBold, ParagraphLink, Spacer, TitleWidthContainer } from "../../components/common/styles";
import { AboutBlock, AboutContainer, InnerBlock, StyledA } from "./Section.styles";
import SkillsBlock from "../../components/SkillsBlock/SkillsBlock";
import ScrollAnimationWrapper from "../../components/ScrollAnimationWrapper/ScrollAnimationWrapper";

const AboutSection: React.FC = () => {

    return (
        <>
            <TitleWidthContainer>
                <H2>
                    about
                </H2>
            </TitleWidthContainer>
            <ContainerLarge>
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
                                    <H3>background</H3>
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
                                    <Spacer $space="2rem" />
                                    <H3>skills</H3>
                                    <Spacer $space="1.5rem" />
                                    <SkillsBlock />
                                    <Spacer $space="4rem" />
                                    <ButtonsContainer>
                                        <StyledA
                                            href="/richard_gao_resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View Richard Gao's resume as a PDF"
                                        >
                                            <CommonButton>VIEW RESUME *</CommonButton>
                                        </StyledA>

                                        <StyledA
                                            href="https://www.linkedin.com/in/richard-gao-417404208/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Visit Richard Gao's LinkedIn profile"
                                        >
                                            <CommonButton >LINKEDIN *</CommonButton>
                                        </StyledA>
                                    </ButtonsContainer>

                                </InnerBlock>
                                <Spacer $space="1rem" />
                            </ScrollAnimationWrapper>
                        </AboutBlock>
                    </AboutContainer>
                </ContentArea>
            </ContainerLarge>
        </>
    )
}
export default AboutSection;