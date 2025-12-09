'use client';

import { Metadata } from '../../services/resume-loader'
import FontAwesomeIcon from '../font-awesome-icon';

export default function PersonalMetadata({ metadata, align } : { metadata: Metadata, align: 'left' | 'right' }) {
  function iconSpan(): React.ReactNode {
    const className = align === 'left' ? 'pr-[12px]' : 'pl-[12px]';
    return <FontAwesomeIcon type={metadata.id} className={className} />
  };

  function handleOnClick() {
    if (metadata.link === undefined) return;

    const target = metadata.link.startsWith('http') ? '_blank' : '_self';
    window.open(metadata.link, target);
  }

  let className = "mt-2.5 mb-2.5";
  if (metadata.link !== undefined)
    className += ' cursor-pointer';
  return (
    <p className={className} onClick={handleOnClick}>
      {align === 'left' && iconSpan() }
      {metadata.value}
      {align === 'right' && iconSpan() }
    </p>
  )
}
