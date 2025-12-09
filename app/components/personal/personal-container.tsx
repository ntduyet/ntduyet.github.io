import Avatar from "./avatar";
import image from "../../../images/avatar.jpeg";
import PersonalDetails from "./personal-details";
import PersonalMetadataList from "./personal-metadata-list";
import { Person, Metadata } from "../../services/resume-loader";

export default function PersonalContainer({ person, metadatas } : { person: Person, metadatas: Metadata[] }) {
  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    gap: "12px",
  };

  return (
    <div className="personal-container" style={style}>
      <Avatar src={image.src} size={168} />
      <PersonalDetails person={person} />
      <PersonalMetadataList metadatas={metadatas} align="right" />
    </div>
  );
}
