import Image from "next/image";

export default function Avatar({ src, size }: { src: string; size: number }) {
  const style: React.CSSProperties = {
    border: "1px solid #425061",
    borderRadius: "50%",
  };
  return (
    <Image
      className="avatar"
      alt={`Candidate's profile picture`}
      src={src}
      width={size}
      height={size}
      style={style}
    />
  );
}
