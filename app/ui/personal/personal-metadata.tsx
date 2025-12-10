'use client';

import { Metadata } from '../../services/resume-loader'
import FontAwesomeIcon from '@/app/ui/font-awesome-icon';

export default function PersonalMetadata({ metadata, align } : { metadata: Metadata, align: 'left' | 'right' }) {
  function iconSpan(): React.ReactNode {
    const className = align === 'left' ? 'mr-[12px]' : 'ml-[12px]';
    return <FontAwesomeIcon type={metadata.id} className={className} />
  };

  function handleOnClick() {
    if (metadata.link === undefined) return;

    const target = metadata.link.startsWith('http') ? '_blank' : '_self';
    window.open(metadata.link, target);
  }

  let className = "mt-2 mb-2 items-center";
  if (metadata.link !== undefined)
    className += ' cursor-pointer transition duration-300 ease-in-out hover:scale-105';
  return (
    <p className={className} onClick={handleOnClick}>
      {align === 'left' && iconSpan() }
      {metadata.value}
      {align === 'right' && iconSpan() }
    </p>
  )
}
