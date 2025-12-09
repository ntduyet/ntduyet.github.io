'use client';

import { Company } from "../../services/resume-loader"
import FontAwesomeIcon from "../font-awesome-icon";

export default function CompanyLabel({ item }: { item: Company }) {
  const style: React.CSSProperties = {
    color: '#dc0000',
    paddingLeft: '8px',
    cursor: 'pointer',
    fontSize: '0.7em'
  }

  function handleOnClick() {
    window.open(item.website, '_blank');
  }

  return (
    <h4>
      {item.name}
      <FontAwesomeIcon type="link" style={style}  onClick={handleOnClick}/>
    </h4>
  )
}
