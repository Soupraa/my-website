import React from "react";
import { H1 } from "../components/common/styles";
import ExperienceBlock from "../components/ExperienceBlock/ExperienceBlock";


export type Experience = {
    time: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
}
const ExperienceData = [
    {
        time: "2021 - PRESENT",
        title: "Associate Engineer, Innovation - NAB",
        description: "Build and maintain full stack web applications for new innovative projects. Work closely with cross-functional teams, including designers, developers and product managers to ensure quality web design and user-centric accessible web apps.",
        tags: ["JavaScript", "TypeScript", "React", "GraphQL", "Node.JS"],
        link: "https://www.nab.com.au"
    },
    {
        time: "2019 - 2021",
        title: "Web developer - FREE LANCE",
        description: "Worked on Shopify and Wordpress websites uplifting outdated designs to a more modern intuitive design.",
        tags: ["JavaScript", "React", "Shopify", "WordPress"],
        link: "https://www.nab.com.au"
    }
]
const ExperienceSection: React.FC = () => {
    return (
        <>
            <H1>
                Experience
            </H1>
            {ExperienceData.map((d: Experience) => {
                return (
                    <ExperienceBlock data={d} />
                )
            })}
        </>
    )
}
export default ExperienceSection;