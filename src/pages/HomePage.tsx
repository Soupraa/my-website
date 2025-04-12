import React, { useEffect, useState } from "react";
import { Button, Title } from "./HomePage.styles";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { ContentArea, NavButton } from "../components/common/styles";

const HomePage: React.FC = () => {
    const navigate = useNavigate(); // Get the navigate function

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <PageTemplate>
            <ContentArea>
                <Title>
                    Richard Gao
                    {/* <LetterFadeIn text={"Richard Gao"} delay={0} /> */}
                </Title>
                <NavButton onClick={handleClick}>LEARN MORE</NavButton>
            </ContentArea>
        </PageTemplate>
    );
};

export default HomePage;
