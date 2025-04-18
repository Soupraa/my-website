import React, { ReactNode, useEffect, useState } from "react";
import { BlackOverlay, Container } from "./PageTemplate.styles";
import NavBar from "../NavBar/NavBar";
import { Canvas } from "@react-three/fiber";
import SceneRouter from "../SceneRouter/SceneRouter";
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
        <>
            <Canvas
                gl={{ preserveDrawingBuffer: true }}
                style={{ position: "fixed", width: "100%", height: "100%", backgroundColor: "#000" }}
                camera={{ position: [0, 0, 25] }}
            >
                <SceneRouter />
            </Canvas>
            <Container>
                {isVisible && <BlackOverlay />}
                {children}

            </Container>
        </>
    )
}
export default PageTemplate;