export default function Summary({ content } : { content: string }) {
  return (
    <p style={{display: 'flex'}}>
      <span className="fa-sharp fa-solid fa-quote-left fa-lg" style={{ paddingTop: '4px', paddingRight: '4px' }} />
      <i>{content}</i>
    </p>
  )
}