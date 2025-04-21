import React from "react";
import { TechTag } from "../common/styles";
import { Experience } from "../../pages/sections/ExperienceSection";
import { AccordionContent, AccordionItemWrapper, ExperienceButton } from "./ExperiencePanel.styles";

const ExperiencePanel: React.FC<{ data: Experience }> = ({ data }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <AccordionItemWrapper $isOpen={isOpen}>
            <ExperienceButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} >
                {data.title}
            </ExperienceButton>
            <AccordionContent>
                <div>
                    <p>{data.time}</p>
                    {data.description}
                </div>
            </AccordionContent>
        </AccordionItemWrapper>


    )
}
export default ExperiencePanel;