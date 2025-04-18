import React from "react";
import { FlexEnd, FlexStart, FullWidthContainer, NavButton } from "../common/styles";

const NavBar: React.FC = () => {
    return (
        <FullWidthContainer>
            <FlexStart>
                LOCAL/
            </FlexStart>
            
          
            <FlexEnd>
                  <NavButton>
                ABOUT
            </NavButton>
            </FlexEnd>

        </FullWidthContainer>
    )
}
export default NavBar;