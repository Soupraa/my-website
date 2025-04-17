import React from "react";
import { H1, Paragraph } from "../../components/common/styles";
import ExperienceBlock from "../../components/ExperienceBlock/ExperienceBlock";

const AboutSection: React.FC = () => {
    return (
        <>
            <H1>
                About
            </H1>
            <Paragraph>
                I'm a developer passionate about building accessible, user-focused web applications through thoughtful and innovative engineering.
                I love crafting delightful digital experiences and am always eager to take on new challenges.
            </Paragraph>
        </>
    )
}
export default AboutSection;