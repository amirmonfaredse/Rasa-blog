import { NavLinkProps } from "@/types/app/website/types";
import Image from "next/image";
import Link from "next/link";

export default function NavLink({ src, alt, title, href = "/" }: NavLinkProps) {
  return (
    <Link
      prefetch={true}
      data-testid="header-navlink"
      href={href}
      className="w-full h-full mb-2 flex justify-center items-center gap-2  md:shadow hover:shadow-2xl hover:rounded-3xl transition-all duration-500"
    >
      <Image alt={alt} src={src} width={25} height={25} />

      <h1 className="text-md">{title}</h1>
    </Link>
  );
}
