import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100vh;
`;

export const ContentArea = styled.div`
    padding: 4rem;
    margin: auto;
    max-width: 1180px;   
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

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