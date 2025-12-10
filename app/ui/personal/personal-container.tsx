import PersonalDetails from "./personal-details";
import PersonalMetadataList from "./personal-metadata-list";
import { Person, Metadata } from "../../services/resume-loader";

export default function PersonalContainer({ person, metadatas } : { person: Person, metadatas: Metadata[] }) {
  return (
    <div className="personal-container grid grid-cols-[1fr_auto] items-start gap-[12px]">
      <PersonalDetails person={person} />
      <PersonalMetadataList metadatas={metadatas} align="right" />
    </div>
  );
}
