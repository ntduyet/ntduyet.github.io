export default function GroupSection({ title, children } : { title: string, children: React.ReactNode | React.ReactNode[] }) {
  return (
    <div className="group-section grid gap-[12px]">
      <h2 className="pb-[12px] border-b border-b-[#5e5e5e]">{title.toUpperCase()}</h2>
      {children}
    </div>
  )
}
