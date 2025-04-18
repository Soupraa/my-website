import styled, { css, keyframes } from "styled-components";
import { TYPOGRAPHY } from "./constants";

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
export const NavButton = styled.button`
    background: none;
    color: white;
    text-decoration: none;
    border: white solid 2px;
    padding: 0.8em 1rem;
    cursor: pointer;
    font-weight: 700;
    margin-right: 10px;
`;
export const Paragraph = styled.p`
    color: #a7a5a5;
    line-height: 1.8rem;
    // text-transform: uppercase;
`;

export const H1 = styled.h1`
    font-family: ${TYPOGRAPHY.TITLE};
    color: white;
    text-transform: uppercase;
    
`;
export const H2 = styled.h2`
  font-family: ${TYPOGRAPHY.SPACE_GROTESK};
  text-transform: uppercase;
`;
export const TechTag = styled.div`
    display:inline-block;
    background: #3530c9;
    border-radius: 1rem;
    padding: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
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
    font-family: ${TYPOGRAPHY.NOVA_SQUARE}
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

export const ParagraphBold = styled.a`
  display: inline-block;
  font-weight: bold;
  color: white; /* Default text color */
  background-color: #0099ff; /* Initial gradient */
  background-size: 200% 100%; /* Double the width to allow sliding */
  background-position: left bottom; /* Start with the gradient hidden */
  -webkit-background-clip: text; /* For Safari */
  background-clip: text;
  transition: background-position 0.6s ease; /* Smooth transition on hover */

  &:hover {
    background-position: right bottom; /* Slide gradient to the right on hover */
    color: transparent;
  }
`;