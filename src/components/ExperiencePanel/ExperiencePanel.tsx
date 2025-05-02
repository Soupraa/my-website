import React from "react";
import { FlexEnd, FlexStart, H3, Paragraph, TechTag } from "../common/styles";
import { Experience, Role } from "../../pages/sections/ExperienceSection";
import { AccordionContent, AccordionItemWrapper, Arrow, DateText, Description, ExperienceButton, TitleContainer } from "./ExperiencePanel.styles";

const ExperiencePanel: React.FC<{ data: Experience }> = ({ data }) => {
    const [isOpen, setIsOpen] = React.useState(data.isOpen);

    return (
        <AccordionItemWrapper $isOpen={isOpen}>
            <ExperienceButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} >
                <FlexStart>
                    <TitleContainer>{data.title}</TitleContainer>
                </FlexStart>
                <FlexEnd>
                    <Arrow className="arrow" $isOpen={isOpen} />
                </FlexEnd>
            </ExperienceButton>
            <AccordionContent>
                {data.roles.map((r: Role, i: number) => {
                    return (
                        <div key={i}>
                            <DateText><H3>{r.time}</H3></DateText>
                            <Description>
                                <H3>{r.roleTitle}</H3>
                                <Paragraph>{r.description}</Paragraph>
                                {r.tags.map((s: string, k: number) => {
                                    return (
                                        <TechTag key={k}>{s}</TechTag>
                                    )
                                })}
                            </Description>
                        </div>
                    )
                })}

            </AccordionContent>
        </AccordionItemWrapper>


    )
}
export default ExperiencePanel;