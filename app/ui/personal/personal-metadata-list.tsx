import { Metadata } from '@/app/services/resume-loader'
import PersonalMetadata from '@/app/ui/personal/personal-metadata'

export default function PersonalMetadataList({ 
  className, 
  metadatas, 
  align 
} : { 
  className?: string, 
  metadatas: Metadata[],
  align: 'left' | 'right' 
}) {
  function metadataListItems(): React.ReactNode[] {
    return metadatas.map(i => <PersonalMetadata key={i.id} metadata={i} align={align} />)
  }

  let finalClassName = 'personal-metadata-list w-full'
  if (className) {
    finalClassName += ` ${className}`;
  } 

  return (
    <div className={finalClassName}>
      {metadataListItems()}
    </div>
  )
}
