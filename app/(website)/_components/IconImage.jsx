import Image from "next/image";
import Link from "next/link";

export default function IconImage({
  src,
  alt,
  href = "/",
  width = 25,
  height = 25,
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit h-fit relative"
    >
      <Image
        className="cursor-pointer hover:scale-125 duration-300"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  );
}
