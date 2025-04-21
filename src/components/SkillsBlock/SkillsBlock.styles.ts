import styled, { css, keyframes } from "styled-components";
import { SCREEN_SIZE, TYPOGRAPHY } from "../common/constants";

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
    margin-right: 3rem;
    
`;
export const LogoText = styled.div`
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 0.8px;
    // color: #a7a5a5
    font-family: ${TYPOGRAPHY.SPACE_GROTESK}
`
export const LogosRow = styled.div<{ direction: 'left' | 'right' }>`
    width: max-content;
    animation: ${({ direction }) => css`${scroll(direction)} 30s linear infinite`};
    flex-wrap: nowrap;
`;
export const LogosAnimationWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  @media (max-width: ${SCREEN_SIZE.MEDIUM}){
        width: 100%;
    }
`;