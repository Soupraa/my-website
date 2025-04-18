import React, { ReactElement } from "react";
import { LogoContainer, LogosRow, LogoText } from "./SkillsBlock.styles";
import { ReactComponent as ReactIcon } from '../../svgs/react_icon.svg';
import { ReactComponent as JavaScriptIcon } from '../../svgs/javascript_icon.svg';
import { ReactComponent as TypeScriptIcon } from '../../svgs/typescript_icon.svg';
import { ReactComponent as HtmlIcon } from '../../svgs/html_icon.svg';
import { ReactComponent as NextJsIcon } from '../../svgs/nextjs_icon.svg';
import { ReactComponent as TailwindIcon } from '../../svgs/tailwind_icon.svg';

type Skill = {
    icon: ReactElement;
    name: string;
}
const SkillsList: Skill[] = [
    {
        icon: <ReactIcon width={40} height={40} />,
        name: "React"
    },
    {
        icon: <JavaScriptIcon width={40} height={40} />,
        name: "Javascript"
    },
    {
        icon: <TypeScriptIcon width={40} height={40} />,
        name: "Typescript"
    },
    {
        icon: <HtmlIcon width={40} height={40} />,
        name: "HTML5"
    },
    {
        icon: <NextJsIcon width={40} height={40} />,
        name: "Next.JS"
    },
    {
        icon: <TailwindIcon width={40} height={40} />,
        name: "Tailwind.css"
    },

]

const SkillsBlock: React.FC = () => {
    return (
        <LogosRow>
            {SkillsList.map((s: Skill, i: number) => {
                return (
                    <LogoContainer key={i}>
                        {s.icon}
                        <LogoText>
                            {s.name}
                        </LogoText>
                    </LogoContainer>
                )
            })}
        </LogosRow>
    )
}
export default SkillsBlock;