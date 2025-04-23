import React from "react";
import { FlexEnd, FlexStart, FullWidthContainer } from "../common/styles";
import LiveClock from "../LiveClock/LiveClock";

const NavBar: React.FC = () => {
    return (
        <FullWidthContainer>
            <FlexStart>
                LOCAL / <LiveClock/>
            </FlexStart>
            
          
            <FlexEnd>
 
            </FlexEnd>

        </FullWidthContainer>
    )
}
export default NavBar;