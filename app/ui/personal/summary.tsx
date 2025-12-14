import FontAwesomeIcon from '@/app/ui/font-awesome-icon'

export default function Summary({ content }: { content: string }) {
  return (
    <p className='flex items-start'>
      <FontAwesomeIcon type='quote' className='mt-[6px] pr-[6px]' />
      <i className='text-neutral-500'>{content}</i>
    </p>
  )
}
