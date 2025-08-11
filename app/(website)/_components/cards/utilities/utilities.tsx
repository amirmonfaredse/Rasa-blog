import { PostCardUtilityProps } from "@/types/app/website/types";

export function Container({ children, className }: PostCardUtilityProps) {
  return <div className={`${className}`}>{children}</div>;
}

export function ColHead({ children, className }: PostCardUtilityProps) {
  return <div className={`${className}`}>{children}</div>;
}
export function ColInfo({ children, className }: PostCardUtilityProps) {
  return (
    <div className={`flex justify-start items-start gap-2 ${className}`}>
      {children}
    </div>
  );
}

export function Reaction({ children, className }: PostCardUtilityProps) {
  return (
    <div className={`cursor-pointer duration-300 ${className}`}>{children}</div>
  );
}
export function LiTag({ children, className }: PostCardUtilityProps) {
  return (
    <li
      className={`w-fit h-fit text-blue-400 border border-blue-400 cursor-pointer duration-300  p-1 px-1.5  rounded-full text-xs ${className}`}
    >
      {children}
    </li>
  );
}
export function ParagraphContainer({
  children,
  className,
}: PostCardUtilityProps) {
  return (
    <div
      className={`flex justify-center items-start ${className}`}
    >
      {children}
    </div>
  );
}
export function FooterPostContainer({
  children,
  className,
}: PostCardUtilityProps) {
  return <div className={`${className}`}>{children}</div>;
}
