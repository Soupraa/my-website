import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100vh;
`;

export const ContentArea = styled.div`
    margin: auto;
    max-width: 1080px;   
    text-align: center;
    padding-inline: 3rem;
`;
export const NavButton = styled.button`
    background: none;
    color: white;
    text-decoration: none;
    border: white solid 2px;
    padding: 0.8em 1rem;
    cursor: pointer;
    font-family: 'Orbitron';
    font-weight: 700;
    margin-right: 10px;
    border-radius: 1rem 0px;
`;
export const Paragraph = styled.p`
    color: #dddddd;
    line-height: 1.5rem;
`;

export const VerticalLine = styled.div`
    width: 1px;
    height: 100px;
    background: linear-gradient(to bottom, #ffffff55, #dddddd);
`;
export const H1 = styled.h1`
    font-family: "Orbitron", serif;
    color: white;
`;
export const H2 = styled.h2`
    color: white;
    font-weight: 400;
    margin-block: 0.5rem;
`;

export const TechTag = styled.div`
    display:inline-block;
    background: #3530c9;
    border-radius: 1rem;
    padding: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
`;
// type SpaceSize = 'xs' | 'sm' | 'md' | 'lg' | string;

// export const Spacer = styled.div<{ space: SpaceSize }>(
//     ({ space }) => `
//     margin-bottom: ${space};
// `);
