import styled from "styled-components";

export const NavBarContainer = styled.div`
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    position: fixed;
    z-index: 2;
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    box-sizing: border-box;
`;

export const FlexStart = styled.div`
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    display: inline-flex
;
`;

export const FlexEnd = styled.div`
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    display: inline-flex;
;
`;
