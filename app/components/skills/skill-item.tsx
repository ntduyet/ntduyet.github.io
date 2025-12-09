export default function SkillItem({ content } : { content: string }) {
  const style: React.CSSProperties = {
    backgroundColor: "#2b343d",
    color: "white",
    borderRadius: "6px",
    textAlign: "center",
    padding: "6px 12px",
  };
  return (
    <div className="skill-item" style={style}>{content}</div>
  );
}
