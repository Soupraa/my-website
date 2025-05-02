import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 3;
  justify-content: center;  
  align-items: center; 
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const BlackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: black;
  z-index: 99; 
  animation: ${fadeOut} 0.5s forwards;
`;

export const MainContent = styled.div`  
  position:relative;
  z-index: 1;
  background: #000;
  width: 100%;
   
  
`;
export const FooterContent = styled.div`  
  position: relative;

  z-index: 5;
`;