import styled from "styled-components";
import { SCREEN_SIZE, TYPOGRAPHY } from "../common/constants";

export const ExperienceButton = styled.button<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
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
        & > div > div.arrow {  
            background: black;
        }
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
    & > div {
        overflow: hidden;
        padding: 2rem;
        display: flex;
        @media (max-width: ${SCREEN_SIZE.MEDIUM}){
            flex-direction: column;
            width: 100%;
            box-sizing: border-box;
        }
    }
`;
export const TitleContainer = styled.h2`
    font-size: 55px;
`;
export const DateText = styled.div` 
    width: 25%;
    margin: auto;
    font-size: 1.5rem;
    @media (max-width: ${SCREEN_SIZE.MEDIUM}){
        width: 100%;
        padding-inline: 0rem;
        padding-block: 1rem;
        font-size: 1rem;
    }
`;
export const Description = styled.div`
    width: 90%;
    padding-inline: 2rem;
    @media (max-width: ${SCREEN_SIZE.MEDIUM}){
        width: 100%;
        padding-inline: 0rem;
    }
`;

export const Arrow = styled.div<{ $isOpen: boolean }>`
    width: 2.5rem;
    height: 2rem;
    background: white;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transition: transform 0.3s ease-in-out, background 1s ease;
    transform: rotate(${({ $isOpen }) => ($isOpen ? '0deg' : '180deg')});

`;