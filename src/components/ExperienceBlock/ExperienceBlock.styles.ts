import styled from "styled-components";

export const ExperienceContainer = styled.a`
    // background: #121212;
    padding: 2rem;
    color: white;
    border-radius: 3px;
    display: flex;
    text-align: left;
    border: none;
    cursor: pointer;
    text-decoration: none;
    margin-block: 1rem;
    min-height: 160px;

    @media (max-width: 678px){
        flex-direction: column;
    }
`;

export const LeftSide = styled.div`
    width: 33%;
    color: #dddddd;
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
    @media (max-width: 678px){
        width: 100%;

    }
`;
export const RightSide = styled.div`
    width: 100%;
`;


