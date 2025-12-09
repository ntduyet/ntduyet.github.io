export default function GroupSection({ title, children } : { title: string, children: React.ReactNode | React.ReactNode[] }) {
  const headerStyle: React.CSSProperties = {
    paddingBottom: '12px',
    borderBottom: '1px solid #5e5e5e'
  }
  return (
    <div className="group-section">
      <h2 style={headerStyle}>{title.toUpperCase()}</h2>
      {children}
    </div>
  )
}
