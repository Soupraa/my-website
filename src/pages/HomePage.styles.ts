import styled, { keyframes } from "styled-components";
import { TYPOGRAPHY } from "../components/common/constants";
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
  font-family: ${TYPOGRAPHY.TITLE};
  font-weight: 800;
  font-style: normal;
  font-size: clamp(2rem, 10vw, 10rem);
  z-index: 1;
  display: inline-block;
  margin: 0;
  margin-left: -6px;
  // background: linear-gradient(270deg,rgb(64, 58, 236),rgb(253, 92, 253),rgb(0, 207, 243), rgb(247, 51, 142) );
  background: linear-gradient(270deg,rgb(191, 135, 255),rgb(255, 182, 137),rgb(151, 239, 255), rgb(255, 137, 192) );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  animation: ${gradientFlow} 20s ease infinite;
`;

export const HeadingSection = styled.div` 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;  
`;

export const InfoContainer = styled.div`
  background: #010105;
  width: 100%;
`;

export const HeadingText = styled.div`
  width: 60%;
`;

export const HomePageContentArea = styled.div`  
    margin: auto;
    max-width: 100vw;   
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;