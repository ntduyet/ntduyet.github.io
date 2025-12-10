import PersonalDetails from "./personal-details";
import PersonalMetadataList from "./personal-metadata-list";
import { Person, Metadata } from "../../services/resume-loader";

export default function PersonalContainer({
  person,
  metadatas,
}: {
  person: Person;
  metadatas: Metadata[];
}) {
  return (
    <div className="personal-container grid grid-cols-[auto_auto] items-start gap-[12px]">
      <PersonalDetails person={person} />
      <PersonalMetadataList
        className="text-lef row-start-2 col-span-1 sm:hidden"
        metadatas={metadatas}
        align="left"
      />
      <PersonalMetadataList
        className="text-right row-[1_/1_] sm:col-[2_/2_] hidden sm:grid"
        metadatas={metadatas}
        align="right"
      />
    </div>
  );
}
