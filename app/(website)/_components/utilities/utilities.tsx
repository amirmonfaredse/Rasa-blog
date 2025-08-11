import { ContainerProps } from "@/types/app/website/types";

export function TagsContainer({ children, className }: ContainerProps) {
  return <div className={`${className}`}>{children}</div>;
}
export function SliderContainer({ children, className }: ContainerProps) {
  return <div className={`${className}`}>{children}</div>;
}
export function PostContainer({ children, className }: ContainerProps) {
  return <div className={`${className}`}>{children}</div>;
}
