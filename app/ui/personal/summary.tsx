export default function Summary({ content } : { content: string }) {
  return (
    <p className="flex items-start">
      <span className="fa-sharp fa-solid fa-quote-left fa-lg mt-[6px] pr-[6px]" />
      <i className="text-neutral-500">{content}</i>
    </p>
  )
}
