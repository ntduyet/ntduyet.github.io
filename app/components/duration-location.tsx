export default function DurationLocation({ contents }: { contents: [string, string] }) {
  const leadingStyle = {
    textAlign: 'left'
  }
  const trailingStyle = {
    textAlign: 'right'
  }
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px'
  }

  return (
    <div style={style}>
      <i style={leadingStyle}>{contents[0]}</i>
      <i style={trailingStyle}>{contents[1]}</i>
    </div>
  )
}