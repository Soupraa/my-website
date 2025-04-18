import styled, { css, keyframes } from "styled-components";

const scroll = (direction: 'left' | 'right') => keyframes`
   0% {
    transform: translateX(${direction === 'right' ? '0%' : '-50%'});
  }
  100% {
    transform: translateX(${direction === 'right' ? '-50%' : '0%'});
  }
`;
export const LogoContainer = styled.div`
    width: fit-content;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    margin-right: 20px;
    
`;
export const LogoText = styled.div`
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 0.5px;
    // color: #a7a5a5
`
export const LogosRow = styled.div<{ direction: 'left' | 'right' }>`
    gap: 3rem;
    width: max-content;
    animation: ${({ direction }) => css`${scroll(direction)} 20s linear infinite`};
    flex-wrap: nowrap;
`;
export const LogosAnimationWrapper = styled.div`
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
`;