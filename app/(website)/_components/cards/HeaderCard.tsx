import { PostCardUtilityProps } from "@/types/app/website/types";

export default function HeaderCard({
  children,
  className,
}: PostCardUtilityProps) {
  return <div className={`${className}`}>{children}</div>;
}
