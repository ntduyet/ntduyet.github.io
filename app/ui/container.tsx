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
      <div className="max-w-5xl m-auto">
        <div className="root mt-0 mb-0 ml-[12px] mr-[12px] pt-[24px] pb-[144px] grid gap-[24px]">
          {children}
        </div>
      </div>
    );
  }

  try {
    const resume = await resumeLoaderService.loadResume();
    return <Component>{resumeComponents(resume)}</Component>;
  } catch (e) {
    console.error(`Failed to load resume: ${e}`);
    return (
      <Component>
        <h1>Oops, failed to load resume.</h1>
      </Component>
    );
  }
}
