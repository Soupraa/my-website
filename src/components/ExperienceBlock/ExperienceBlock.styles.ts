import styled from "styled-components";
import { SCREEN_SIZE } from "../common/constants";

export const ExperienceContainer = styled.a`
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

    @media (max-width: ${SCREEN_SIZE.MEDIUM}){
        flex-direction: column;
    }
`;

export const LeftSide = styled.div`
    width: 33%;
    color: #dddddd;
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
    @media (max-width: ${SCREEN_SIZE.MEDIUM}){
        width: 100%;

    }
`;
export const RightSide = styled.div`
    width: 100%;
`;

export const TextBlock = styled.div`
    color: #dddddd;
    line-height: 1.5rem;
    font-size: 0.9rem;
    margin-block: 1rem;
`;
export const TextTitle = styled.h2`
    font-size: 1.1rem;
    margin: 0;
`;

