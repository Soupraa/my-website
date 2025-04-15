import React from "react";
import { FlexEnd, FlexMiddle, FlexStart, NavBarContainer } from "./NavBar.styles";
import { NavButton } from "../common/styles";

const NavBar: React.FC = () => {
    return (
        <NavBarContainer>
            <FlexStart>
                asdasda
            </FlexStart>
            <NavButton>
                HOME
            </NavButton>
            <NavButton>
                ABOUT
            </NavButton>
            <FlexEnd />

        </NavBarContainer>
    )
}
export default NavBar;