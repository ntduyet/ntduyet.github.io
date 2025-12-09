import SkillItem from "./skill-item";

export default function SkillList({ items } : { items: string[] }) {
  const style = {
    display: 'flex', 
    flexWrap: 'wrap',
    gap: '8px'
  }

  function skillItemComponents() {
    return items.map(s => <SkillItem key={s} content={s} />);
  }

  return (
    <div className="skill-list" style={style}>
      {skillItemComponents()}
    </div>
  )
}
