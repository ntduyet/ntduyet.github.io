export default function Avatar({ src, size }: { src: string, size: number }) {
  const style = {
    border: '1px solid #425061',
    borderRadius: '50%'
  }
  return (
    <img className="avatar" style={style} src={src} width={size} height={size} /> 
  )
}