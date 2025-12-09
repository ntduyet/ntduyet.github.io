import { Person } from "../../services/resume-loader";

export default function PersonalDetails({ person } : { person: Person }) {
  return (
    <div className="personal-details-container pt-[24px]">
      <h1>{person.name}</h1>
      <h3 className="mt-[6px]">{person.title}</h3>
    </div>
  )
}
