'use strict';

import { Metadata } from "../../services/resume-loader";
import PersonalMetadata from "./personal-metadata";

export default function PersonalMetadataList({ metadatas, align } : { metadatas: Metadata[], align: 'left' | 'right'}) {
  const style: React.CSSProperties = {
    textAlign: align
  }

  function metadataListItems(): React.ReactNode[] {
    return metadatas.map(i => <PersonalMetadata key={i.id} metadata={i} align={align} />)
  }

  return (
    <div className="personal-metadata-list" style={style}>
      {metadataListItems()}
    </div>
  )
}
