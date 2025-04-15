import styled, { keyframes } from "styled-components";
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
  font-weight: 600;
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

export const HeadingSection = styled.div` 
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: flex-start;  
  text-align: left;         
`;

