import Avatar from "./avatar";
import PersonalDetails from "./personal-details";
import PersonalMetadataList from "./personal-metadata-list";
import { Person, Metadata } from "../../services/resume-loader";

export default function PersonalContainer({ person, metadatas } : { person: Person, metadatas: Metadata[] }) {
  return (
    <div className="personal-container grid grid-cols-[auto_1fr_auto] gap-[12px]">
      <Avatar src='./images/avatar.jpeg' size={168} />
      <PersonalDetails person={person} />
      <PersonalMetadataList metadatas={metadatas} align="right" />
    </div>
  );
}
