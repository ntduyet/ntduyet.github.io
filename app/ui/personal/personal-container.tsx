import PersonalDetails from '@/app/ui/personal/personal-details'
import PersonalMetadataList from '@/app/ui/personal/personal-metadata-list'
import { Person, Metadata } from "@/app/services/resume-loader"

export default function PersonalContainer({
  person,
  metadatas
} : {
  person: Person,
  metadatas: Metadata[]
}) {
  return (
    <div className="personal-container grid grid-cols-[auto_auto] items-start gap-[12px]">
      <PersonalDetails person={person} />
      <PersonalMetadataList
        className="text-left row-start-2 col-span-1 sm:hidden"
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
