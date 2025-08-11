import { PostCardUtilityProps } from "@/types/app/website/types";

export default function MainCard({
  children,
  className,
}: PostCardUtilityProps) {
  return (
    <div style={{ backgroundColor: `#BEDBED${50}` }} className={`${className}`}>
      {children}
    </div>
  );
}
