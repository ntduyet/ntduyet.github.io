import { Person } from "../../services/resume-loader";

export default function PersonalDetails({ person } : { person: Person }) {
  return (
    <div className="personal-details-container">
      <h1>{person.name}</h1>
      <h3>{person.title}</h3>
    </div>
  )
}