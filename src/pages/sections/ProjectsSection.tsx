import React from "react";
import { ProjectContentContainer, ProjectsSectionContainer } from "./Section.styles";
import { BigH2 } from "../../components/common/styles";
import { Parallax } from "react-scroll-parallax";

const ProjectsSection: React.FC = () => {
  return (
    <Parallax speed={-100}>
      {/* #ed5b2b */}
      <ProjectsSectionContainer>
        <ProjectContentContainer>
          <BigH2>MY ACRHIVE OF PROJECTS</BigH2>
        </ProjectContentContainer>
      </ProjectsSectionContainer>
    </Parallax>
  )
}
export default ProjectsSection