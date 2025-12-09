import SkillItem from "./skill-item";

export default function SkillList({ items } : { items: string[] }) {
  function skillItemComponents() {
    return items.map(s => <SkillItem key={s} content={s} />);
  }

  return (
    <div className="skill-list flex flex-wrap gap-[8px]">
      {skillItemComponents()}
    </div>
  )
}
