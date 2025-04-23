import styled, { keyframes } from "styled-components";
import { SCREEN_SIZE, TYPOGRAPHY } from "./constants";

export const Container = styled.div`
    width: 100%;
    height:100vh;
`;
export const Spacer = styled.div<{ $space?: string }>`
  margin-bottom: ${({ $space }) => $space || "0rem"};
`;
export const ContentArea = styled.div`
    margin: auto;
    text-align: center;
    padding-inline: 2rem;
    color: white;
`;
export const ButtonsContainer = styled.div`
    gap: 3rem;
    display: flex;
    @media (max-width: ${SCREEN_SIZE.SMALL}) {
        flex-direction: column;
    }
`;
export const CommonButton = styled.button`  
    text-decoration: none;
    font-family: ${TYPOGRAPHY.SPACE_GROTESK};
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    border: none;
    padding: 0.8rem 1rem;
    cursor: pointer;
    width: fit-content;
    color: #010105;
    -webkit-text-fill-color: #010105; /* disables Safari default blue */
    -webkit-tap-highlight-color: #010105; /* removes gray tap highlight */
    background: linear-gradient(to right, #0099ff 50%, white 50%);
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: background-position 0.5s ease;
    clip-path: polygon(
    0 0,
    calc(100% - 15px) 0,
    100% 15px,
    100% 100%,
    15px 100%,
    0 calc(100% - 15px)
    );
    &:hover {
        background-position: 0 0;
    }
    @media (max-width: ${SCREEN_SIZE.SMALL}) {
        width: 100%;
    }

`;
export const Paragraph = styled.p`
    color: #a7a5a5;
    line-height: 1.8rem;
`;

export const H1 = styled.h1`
    font-family: ${TYPOGRAPHY.TITLE};
    color: white;
    text-transform: uppercase;
    
`;
export const H2 = styled.h2`
  font-family: ${TYPOGRAPHY.SPACE_GROTESK};
  text-transform: uppercase;
  margin: 0;
`;
export const TechTag = styled.div`
    display:inline-block;
    background: #3530c9;
    padding: 0.8rem;
    margin-right: 0.8rem;
    margin-bottom: 0.6rem;
    font-size: 0.8rem;
      clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
    );
`;
export const FlexStart = styled.div`
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    display: inline-flex;
;
`;
export const FlexMiddle = styled.div`
    display: flex;
`;

export const FlexEnd = styled.div`
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    display: inline-flex;
;
`;

export const FullWidthContainer = styled.div`
    width: 100vw;
    z-index: 2;
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    box-sizing: border-box;
    color: white;
    font-family: ${TYPOGRAPHY.NOVA_SQUARE};
    @media (max-width: ${SCREEN_SIZE.SMALL}) {
        padding: 1rem 1rem;
    }
`;

export const TitleWidthContainer = styled.div`
    width: 100vw;
    border-block: white 1px solid;
    text-align: center;
`;

export const BigH2 = styled.h2`
    font-family: ${TYPOGRAPHY.TITLE};
    font-weight: 800;
    font-style: normal;
    font-size: clamp(3rem, 10vw, 7vw);
    margin: auto;
`;

export const ParagraphLink = styled.a`
    position: relative;
    display: inline-block;
    font-weight: 700;
    color: white;
    text-decoration: none;
    background: linear-gradient(to right, #0099ff 50%, white 50%);
    background-size: 200% 100%;
    background-position: 100% 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: background-position 0.5s ease;

    &:hover {
        background-position: 0 0;
    }
`;
export const ParagraphBold = styled.b`
    font-weight: 600;
    color: white;
`;


const driftStatic = keyframes`
  0% {
    transform: translateY(10%) translateX(10%);
  }
  100% {
    transform: translateY(-10%) translateX(-10%);
  }
`;

export const StaticOverlayWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const StaticEffectLayer = styled.div`
  position: absolute;
  inset: -200%;
  background-image: url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png");
  background-repeat: repeat;
  opacity: 0.09;
  will-change: transform;
  animation: ${driftStatic} 0.2s linear infinite both;
  pointer-events: none;
  z-index: 2;
`;
export const ParallaxLayer = styled.div`
   position: relative;
  width: 100%;
  padding-top: 50%;
  overflow: hidden;
`;

