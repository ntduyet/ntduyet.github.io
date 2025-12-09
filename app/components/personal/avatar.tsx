import Image from "next/image";

export default function Avatar({ src, size }: { src: string; size: number }) {
  return (
    <Image
      className="avatar rounded-[50%]"
      alt={`Candidate's profile picture`}
      src={src}
      width={size}
      height={size}
    />
  );
}
