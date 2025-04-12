import React, { ReactNode, useEffect, useState } from "react";
import { BlackOverlay, Container } from "./PageTemplate.styles";
import NavBar from "../NavBar/NavBar";
const PageTemplate: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);

    // Effect to hide the overlay after 3 seconds
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 500); // Match this duration to the animation duration

        return () => clearTimeout(timeout); // Cleanup timeout on component unmount
    }, []);
    return (
        <Container>
            {isVisible && <BlackOverlay />}
            {children}
        </Container>
    )
}
export default PageTemplate;