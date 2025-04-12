import React from "react";
import { Title } from "./HomePage.styles";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { ContentArea, Paragraph, VerticalLine } from "../components/common/styles";

const AboutPage: React.FC = () => {
    return (
        <PageTemplate>
            <ContentArea>
                <Title>
                    About
                </Title>
                <Paragraph>
                    I'm Richard! I've got 4+ years of software development experience specialising in front-end technologies.
                    I'm a developer that is passionate about building fun and exciting web applications through innovative engineering.
                </Paragraph>
                <VerticalLine/>
            </ContentArea>
        </PageTemplate>
    );
}
export default AboutPage;