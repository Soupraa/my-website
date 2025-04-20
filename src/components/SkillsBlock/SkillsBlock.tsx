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
import { ReactComponent as CssIcon } from '../../svgs/css_icon.svg';

import { Spacer } from "../common/styles";

type Skill = {
    icon: ReactElement;
    name: string;
}
const SkillsList: Skill[] = [
    {
        icon: <ReactIcon width={45} height={45} />,
        name: "React"
    },
    {
        icon: <JavaScriptIcon width={45} height={45} />,
        name: "Javascript"
    },
    {
        icon: <TypeScriptIcon width={45} height={45} />,
        name: "Typescript"
    },
    {
        icon: <HtmlIcon width={45} height={45} />,
        name: "HTML5"
    },
    {
        icon: <CssIcon width={45} height={45} />,
        name: "CSS"
    },
]

const SkillsListTwo: Skill[] = [
    {
        icon: <NextJsIcon width={45} height={45} />,
        name: "Next.JS"
    },
    {
        icon: <TailwindIcon width={45} height={45} />,
        name: "Tailwind.css"
    },
    {
        icon: <NodeJsIcon width={45} height={45} />,
        name: "Node.JS"
    },
    {
        icon: <GraphqlIcon width={45} height={45} />,
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
            <Spacer $space="4rem"/>
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