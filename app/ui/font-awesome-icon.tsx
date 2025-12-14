'use client';

const iconMap = {
  email: 'fa-solid fa-envelope',
  phone: 'fa-solid fa-phone',
  location: 'fa-solid fa-location-dot',
  linkedin: 'fa-brands fa-linkedin',
  link: 'fa-solid fa-arrow-up-right-from-square',
  quote: 'fa-sharp fa-solid fa-quote-left fa-lg',
} as const;

export type IconType = keyof typeof iconMap;

function isIconType(value: string): value is IconType {
  return value in iconMap;
}

export default function FontAwesomeIcon({ 
  type, 
  className, 
  onClick 
}: { 
  type: IconType | (string & {}),
  className?: string, 
  onClick?: () => void 
}) {
  if (!isIconType(type))
    return null;

  const iconClass = iconMap[type];
  let finalClassName = `${iconClass}`;
  if (className) {
    finalClassName += ` ${className}`
  }
  return <span className={finalClassName} onClick={ () => onClick?.() } />;
}
