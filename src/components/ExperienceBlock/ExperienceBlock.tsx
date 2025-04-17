import React from "react";
import { ExperienceContainer, LeftSide, RightSide } from "./ExperienceBlock.styles";
import { TechTag } from "../common/styles";
import { Experience } from "../../sections/ExperienceSection";
import { TextBlock, TextTitle } from "../../sections/Sections.styles";

const ExperienceBlock: React.FC<{ data: Experience }> = ({ data }) => {
    return (
        <ExperienceContainer href={data.link} target="_blank">
            <LeftSide>{data.time}</LeftSide>
            <RightSide>
                <TextTitle>{data.title}</TextTitle>
                <TextBlock>
                   {data.description}
                </TextBlock>
                {data.tags.map((s: string) => {
                    return (
                        <TechTag>{s}</TechTag>
                    )
                })}
            </RightSide>
        </ExperienceContainer>

    )
}
export default ExperienceBlock;