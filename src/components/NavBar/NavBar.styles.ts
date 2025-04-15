import styled from "styled-components";

export const NavBarContainer = styled.div`
    width: 100%;
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
