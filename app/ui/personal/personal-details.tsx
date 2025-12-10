import { Person } from "../../services/resume-loader";

export default function PersonalDetails({ person } : { person: Person }) {
  return (
    <div className="personal-details-container flex flex-wrap items-center gap-[12px]">
      <img className="avatar rounded-[50%] w-[20%] min-w-[120px]" src='./images/avatar.jpeg' />
      <div>
        <h1>{person.name}</h1>
        <h3 className="mt-[6px]">{person.title}</h3>
      </div>
    </div>
  )
}
