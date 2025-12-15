export default function SkillItem({ content } : { content: string }) {
  return (
    <div 
    className="skill-item bg-slate-800 text-center text-white rounded-full pt-[6px] pb-[6px] pl-[12px] pr-[12px]">
      {content}
    </div>
  );
}
