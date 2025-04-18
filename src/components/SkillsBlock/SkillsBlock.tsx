import React, { ReactElement } from "react";
import { LogoContainer, LogosAnimationWrapper, LogosRow, LogoText } from "./SkillsBlock.styles";
import { ReactComponent as ReactIcon } from '../../svgs/react_icon.svg';
import { ReactComponent as JavaScriptIcon } from '../../svgs/javascript_icon.svg';
import { ReactComponent as TypeScriptIcon } from '../../svgs/typescript_icon.svg';
import { ReactComponent as HtmlIcon } from '../../svgs/html_icon.svg';
import { ReactComponent as NextJsIcon } from '../../svgs/nextjs_icon.svg';
import { ReactComponent as TailwindIcon } from '../../svgs/tailwind_icon.svg';
import { ReactComponent as NodeJsIcon } from '../../svgs/nodejs_icon.svg';
import { ReactComponent as GraphqlIcon } from '../../svgs/graphql_icon.svg';

type Skill = {
    icon: ReactElement;
    name: string;
}
const SkillsList: Skill[] = [
    {
        icon: <ReactIcon width={30} height={30} />,
        name: "React"
    },
    {
        icon: <JavaScriptIcon width={30} height={30} />,
        name: "Javascript"
    },
    {
        icon: <TypeScriptIcon width={30} height={30} />,
        name: "Typescript"
    },
    {
        icon: <HtmlIcon width={30} height={30} />,
        name: "HTML5"
    }
]

const SkillsListTwo: Skill[] = [
    {
        icon: <NextJsIcon width={30} height={30} />,
        name: "Next.JS"
    },
    {
        icon: <TailwindIcon width={30} height={30} />,
        name: "Tailwind.css"
    },
    {
        icon: <NodeJsIcon width={30} height={30} />,
        name: "Node.JS"
    },
    {
        icon: <GraphqlIcon width={30} height={30} />,
        name: "Graphql"
    },
]
const SkillsBlock: React.FC = () => {
    return (
        <>
            <LogosAnimationWrapper>
                <LogosRow direction="right">
                    {[...SkillsList, ...SkillsList].map((s: Skill, i: number) => {
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
            </LogosAnimationWrapper>
            <LogosAnimationWrapper>
                <LogosRow direction="left">
                    {[...SkillsListTwo, ...SkillsListTwo].map((s: Skill, i: number) => {
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
            </LogosAnimationWrapper>
        </>
    )
}
export default SkillsBlock;