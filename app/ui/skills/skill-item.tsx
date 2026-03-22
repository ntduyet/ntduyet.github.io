export default function SkillItem({ content } : { content: string }) {
  return (
    <div 
    className="skill-item bg-slate-800 text-sm text-center text-white rounded-full py-1.5 px-3">
      {content}
    </div>
  );
}
