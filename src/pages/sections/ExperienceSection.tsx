import React from "react";
import { ContainerLarge, H2, TitleWidthContainer } from "../../components/common/styles";
import ExperiencePanel from "../../components/ExperiencePanel/ExperiencePanel";

export type Role = {
    roleTitle?: string;
    time: string;
    description: string;
    tags: string[];
}
export type Experience = {
    title: string;
    roles: Role[];
    link?: string;
    isOpen: boolean;
}
const ExperienceData = [
    {
        title: "NAB",
        roles: [{
            roleTitle: "Associate Engineer",
            time: "2022 - PRESENT",
            description: "Build and maintain full stack web applications for new innovative projects. Collaborate closely with cross-functional teams, including designers, developers and product managers to create high quality web solutions. Ensure applications are accessible, performant, and responsive across devices, while applying best practices in web development.",
            tags: ["JavaScript", "TypeScript", "React", "GraphQL", "Node.JS"],
        },
        {
            roleTitle: "Quality Engineer Intern",
            time: "2021 - 2022",
            description: "Developed, and contributed to the creation of an internal performance testing framework to support high-scale applications enabling batch testing and reliable benchmarking. Additionally, maintained existing testing platforms to support other teams in using these platforms.",
            tags: ["AWS", "Python", "Flask", "JavaScript", "React"],
        }],
        link: "https://www.nab.com.au",
        isOpen: true
    },
    {
        title: "Freelance",
        roles: [{
            roleTitle: "Freelance",
            time: "2019 - 2021",
            description: "Built and maintained websites on Shopify and WordPress, creating custom components, themes, and plugins to deliver tailored user experiences.",
            tags: ["JavaScript", "WordPress", "Shopify", "CSS"],
        }],
        link: "https://www.nab.com.au",
        isOpen: false
    }
]
const ExperienceSection: React.FC = () => {
    return (
        <>
            <TitleWidthContainer>
                <H2>
                    EXPERIENCE
                </H2>
            </TitleWidthContainer>
            <ContainerLarge>
                {ExperienceData.map((d: Experience, i: number) => {
                    return (
                        <ExperiencePanel data={d} key={i} />
                    )
                })}
            </ContainerLarge>
            <TitleWidthContainer>
                <H2>
                    ...
                </H2>
            </TitleWidthContainer>
        </>
    )
}
export default ExperienceSection;