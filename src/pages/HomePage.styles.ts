import styled, { keyframes } from "styled-components";

export const Title = styled.h1`
    font-family: "Orbitron", serif;
    font-weight: 600;
    font-style: normal;
    font-size: clamp(2rem, 10vw, 10rem);
    color: white;
    letterspacing: 0.5rem;
    line-height: 0;
    z-index: 1; // Ensure title is above canvas
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


