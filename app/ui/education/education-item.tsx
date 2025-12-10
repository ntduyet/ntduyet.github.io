import { Education } from "../../services/resume-loader"
import DurationLocation from "../duration-location"

export default function EducationItem({ item }: { item: Education }) {
  return (
    <div className="education-item">
      <h3>{item.school}</h3>
      <h4>{item.degree}</h4>
      <DurationLocation contents={[item.duration, item.location]} />
    </div>
  )
}