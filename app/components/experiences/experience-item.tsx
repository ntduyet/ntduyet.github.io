import { WorkExperience } from "../../services/resume-loader";
import DurationLocation from "../duration-location";
import CompanyLabel from "./company-label";
import TaskList from "./task-list";

export default function ExperienceItem({ item }: { item: WorkExperience }) {
  return (
    <div className="experience-item grid gap-[2px]">
      <h3>{item.position}</h3>
      <CompanyLabel item={item.company} />
      <DurationLocation contents={[item.duration, item.location]} />
      <TaskList tasks={item.tasks} />
    </div>
  )
}
