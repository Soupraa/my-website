import React from "react";
import { ExperienceContainer, LeftSide, RightSide, TextBlock, TextTitle } from "./ExperienceBlock.styles";
import { TechTag } from "../common/styles";
import { Experience } from "../../pages/sections/ExperienceSection";

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