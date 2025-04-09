import React, { useEffect, useState } from "react";
import { Button, Title } from "./HomePage.styles";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate/PageTemplate";

const HomePage: React.FC = () => {
    const navigate = useNavigate(); // Get the navigate function

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <PageTemplate>
            <Title>
                Richard Gao
                {/* <LetterFadeIn text={"Richard Gao"} delay={0} /> */}
            </Title>
            <Button onClick={handleClick}>Click Me</Button>
        </PageTemplate>
    );
};

export default HomePage;
