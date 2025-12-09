import { WorkExperience } from "../../services/resume-loader";
import ExperienceItem from "./experience-item";

export default function ExperienceList({ items }: { items: WorkExperience[] }) {
  function experienceItemComponents() {
    return items.map(e => <ExperienceItem key={`${e.company.name}/${e.duration}`} item={e} />);
  }

  return (
    <>
    {experienceItemComponents()}
    </>
  )
}
