import type { CSSProperties } from "react";

const iconMap = new Map([
  ['email', 'fa-solid fa-envelope'],
  ['phone', 'fa-solid fa-phone'],
  ['location', 'fa-solid fa-location-dot'],
  ['linkedin', 'fa-brands fa-linkedin'],
  ['link', 'fa-solid fa-arrow-up-right-from-square'],
])

export default function FontAwesomeIcon({ type, style, onClick }: { type: string, style?: CSSProperties, onClick?: () => void }) {
  const className = iconMap.get(type);
  return <span className={className} style={style} onClick={ () => onClick?.() } />;
}
