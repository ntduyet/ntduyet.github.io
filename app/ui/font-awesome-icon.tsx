const iconMap = new Map([
  ['email', 'fa-solid fa-envelope'],
  ['phone', 'fa-solid fa-phone'],
  ['location', 'fa-solid fa-location-dot'],
  ['linkedin', 'fa-brands fa-linkedin'],
  ['link', 'fa-solid fa-arrow-up-right-from-square'],
])

export default function FontAwesomeIcon({ type, className, onClick }: { type: string, className?: string, onClick?: () => void }) {
  const iconClass = iconMap.get(type);
  if (!iconClass) return null;

  let finalClassName = `${iconClass}`;
  if (className !== undefined) {
    finalClassName += ` ${className}`
  }
  return <span className={finalClassName} onClick={ () => onClick?.() } />;
}
