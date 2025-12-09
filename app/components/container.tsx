import { IResumeLoaderService, Resume } from "../services/resume-loader";

import GroupSection from "./group-section";
import PersonalContainer from "./personal/personal-container";
import Summary from "./personal/summary";
import React from "react";
import SkillList from "./skills/skill-list";
import ExperienceList from "./experiences/experience-list";
import EducationItem from "./education/education-item";

export default async function Container({
  resumeLoaderService,
}: {
  resumeLoaderService: IResumeLoaderService;
}) {
  const outerStyle: React.CSSProperties = {
    maxWidth: "1048px",
    margin: "auto",
    position: "relative",
  };
  const style: React.CSSProperties = {
    margin: "0 auto",
    paddingTop: "24px",
    paddingBottom: "144px",
  };

  function resumeComponents(resume: Resume): React.ReactNode {
    return (
      <>
        <section>
          <PersonalContainer
            person={resume.person}
            metadatas={resume.metadatas}
          />
        </section>
        <section>
          <Summary content={resume.summary} />
        </section>
        <GroupSection title="Skills">
          <SkillList items={resume.skills} />
        </GroupSection>
        <GroupSection title="Work Experiences">
          <ExperienceList items={resume.experiences} />
        </GroupSection>
        <GroupSection title="Education">
          <EducationItem item={resume.education} />
        </GroupSection>
      </>
    );
  }

  function Component({ children }: { children: React.ReactNode }) {
    return (
      <div style={outerStyle}>
        <div className="root" style={style}>
          {children}
        </div>
      </div>
    );
  }

  try {
    const resume = await resumeLoaderService.loadResume();
    return <Component>{resumeComponents(resume)}</Component>;
  } catch (e) {
    console.log(e);
    return (
      <Component>
        <h1>Oops, failed to load resume.</h1>
      </Component>
    );
  }
}
