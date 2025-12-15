import image from '@/public/images/avatar.jpeg'
import { Person } from '@/app/services/resume-loader';

export default function PersonalDetails({ person } : { person: Person }) {
  return (
    <div className="personal-details-container flex flex-wrap items-center gap-[12px]">
      <img 
      className="avatar rounded-[50%] w-[20%] min-w-[100px]" 
      src={image.src}
      alt='Profile Photo' />
      <div>
        <h1>{person.name}</h1>
        <h3 className="mt-[6px]">{person.title}</h3>
      </div>
    </div>
  )
}
