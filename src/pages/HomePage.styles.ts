import styled, { css, keyframes } from "styled-components";
const gradientFlow = keyframes`
   0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;
export const Title = styled.h1`
  font-family: "Orbitron", serif;
  font-weight: 800;
  font-style: normal;
  font-size: clamp(2rem, 10vw, 5rem);
  z-index: 1;
  display: inline-block;
  margin: 0;
  
  background: linear-gradient(270deg,rgb(64, 58, 236),rgb(253, 92, 253),rgb(0, 207, 243), rgb(247, 51, 142) );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  animation: ${gradientFlow} 20s ease infinite;
`;

export const Button = styled.button`
  background-color: #ff4060;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  position: relative; 
  z-index: 2; 
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e53946;
  }
`;
const headingSlideIn = keyframes`
   0% {
    padding-top: 0;
    width: 100%;
    justify-content: center;

  }
  100% {
    padding-top: 4rem;
    width: 50%;
    
  }
`;
const headingSlideOut = keyframes`
  0% {
    padding-top: 4rem;
    padding-right: 5rem;
    width: 50%;
  }
  100% {
    padding-top: 0;
    padding-right: 12rem;
    justify-content: center;
  }
`;
export const HeadingSection = styled.div<{ slide: boolean }>`
  min-height: 100vh;
  width: 100%;
  max-width: 1280px;
  text-align: left;
  display: flex;
  flex-direction: column;
  transition: transform 0.6s ease-in-out, width 0.6s ease-in-out;
  padding-inline: 12rem;
  justify-content: center;
  animation: ${({ slide }) =>
    slide ? headingSlideIn : null} 0.6s ease-in-out forwards, width 0.6s ease-in-out forwards;
`;
const slideIn = keyframes`
  0% {
    width: 0%;
    opacity: 0;
  }
  100% {
    width: 80%;
    opacity: 1;
  }
`;
export const InfoPanel = styled.div<{ slide: boolean }>`
    width: ${({ slide }) => (slide ? '50%' : '0%')};
    height: 100vh;
    overflow-y: auto;
    background: #060606;
    padding-left: 5rem;
    padding-right: ${({ slide }) => (slide ? '12rem' : '0')};
    padding-top: 4rem;
    margin-left: auto; 
    animation: ${({ slide }) => (slide ? slideIn : null)} 0.6s ease-in-out forwards;

`;

export const ContentArea = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden
`;