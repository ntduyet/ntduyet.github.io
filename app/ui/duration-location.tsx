export default function DurationLocation({ contents }: { contents: [string, string] }) {
  return (
    <div className="grid grid-cols-2 gap-[12px] text-neutral-400">
      <i className="text-left">{contents[0]}</i>
      <i className="text-right">{contents[1]}</i>
    </div>
  )
}
