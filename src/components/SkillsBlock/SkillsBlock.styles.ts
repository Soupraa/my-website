import styled from "styled-components";
import { TYPOGRAPHY } from "../common/constants";

export const LogoContainer = styled.div`
    width: fit-content;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`;
export const LogoText = styled.div`
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 0.5px;
    // color: #a7a5a5
`
export const LogosRow = styled.div`
    gap: 3rem;
    display: flex;
      flex-wrap: wrap; /* allows wrapping on smaller screens */

`;