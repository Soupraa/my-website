import styled from "styled-components";
import { SCREEN_SIZE, TYPOGRAPHY } from "../common/constants";


export const ExperienceButton = styled.button<{ $isOpen: boolean }>`
     width: 100%;
    font-size: clamp(1.4rem, 10vw, 4vw);
    font-family: ${TYPOGRAPHY.SPACE_GROTESK};
    text-transform: uppercase;
    font-weight: 800;
    text-align: left;
    cursor: pointer;
    color: white;
    border: none;
    border-bottom: ${({ $isOpen }) => ($isOpen ? "none" : "white 1px solid")};
    padding: 1rem;
    background-color: #0099ff; /* final background after hover */
    background-image: linear-gradient(to bottom, #010105 50%, #010105 50%);
    background-repeat: no-repeat;
    background-size: 100% 100%; /* Start fully filled */
    background-position: center;
    transition: background-size 0.5s ease, color 1s ease, border-bottom 1s ease;
    pointer-events: auto;
    &:hover {
        background-size: 100% 0%; /* Collapse inward toward center */
        color: black;
    }
`;
export const AccordionItemWrapper = styled.div<{ $isOpen: boolean }>`
    display: grid;
    grid-template-rows: ${({ $isOpen }) => ($isOpen ? "auto 1fr" : "auto 0fr")};
    border-bottom: ${({ $isOpen }) => ($isOpen ? "white 1px solid" : "none")};
    transition: grid-template-rows 0.4s, border-bottom 1s ease;
    overflow: hidden;
    background: #010105;
`;
export const AccordionContent = styled.div`
    overflow: hidden;
    color: white;
    font-size: 1.6rem;
    & > div {
        overflow: hidden;
        padding: 2rem 1rem;
        font-size: 1.2rem;
        display: flex;
    }
`;
