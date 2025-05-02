import styled from "styled-components";
import { SCREEN_SIZE }  from "../../components/common/constants";

export const AboutContainer = styled.div`
    z-index: 1;
    display:flex;
    color: white;
    text-align: left;
    gap: 5rem;
    @media (max-width: ${SCREEN_SIZE.MEDIUM}){
        flex-direction: column;
        gap: 2rem;
    }
`;

export const AboutBlock = styled.div`
    width: 50%;
    padding-block: 2rem;
    @media (max-width: ${SCREEN_SIZE.MEDIUM}){
        width: 100%;
    }
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
export const InnerBlock = styled.div`
    width: 80%;
    @media (max-width: ${SCREEN_SIZE.MEDIUM}){
        width: 100%;
    }
`;

export const ProjectsSectionContainer = styled.div`
    height: 100vh;
    width: 100%;
    background: #0099ff;
    z-index: 1;
    position: relative;
`;
export const StyledA = styled.a`    
    text-decoration: none;
`;
export const ProjectContentContainer = styled.div`
    padding: 2rem;
`;
