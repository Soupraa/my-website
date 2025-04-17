import React from "react";
import {NavBarContainer } from "./NavBar.styles";
import { FlexEnd, FlexStart, NavButton } from "../common/styles";

const NavBar: React.FC = () => {
    return (
        <NavBarContainer>
            <FlexStart>
                LOCAL/
            </FlexStart>
            
          
            <FlexEnd>
                  <NavButton>
                ABOUT
            </NavButton>
            </FlexEnd>

        </NavBarContainer>
    )
}
export default NavBar;