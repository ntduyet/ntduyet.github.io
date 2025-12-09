'use client';

import { CSSProperties } from 'react';
import { Metadata } from '../../services/resume-loader'
import FontAwesomeIcon from '../font-awesome-icon';

export default function PersonalMetadata({ metadata, align } : { metadata: Metadata, align: 'left' | 'right' }) {
  function iconSpan(): React.ReactNode {
    const style: CSSProperties = align === 'left' ? { paddingRight: '12px'} : { paddingLeft: '12px' }
    return <FontAwesomeIcon type={metadata.id} style={style } />
  };

  function handleOnClick() {
    if (metadata.link === undefined) return;

    const target = metadata.link.startsWith('http') ? '_blank' : '_self';
    window.open(metadata.link, target);
  }

  return (
    <p style={metadata.link !== undefined ? {cursor: 'pointer'} : {}} onClick={handleOnClick}>
      {align === 'left' && iconSpan() }
      {metadata.value}
      {align === 'right' && iconSpan() }
    </p>
  )
}
