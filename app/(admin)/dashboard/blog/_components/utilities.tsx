import { TProps } from "@/types/app/admin/types";


export function Th({ children, row = false, center = false }: TProps) {
  return (
    <th
      className={`${row ? "w-[50px]" : "w-[280px]"} h-full flex ${
        center ? "justify-center" : "justify-start"
      } items-center line-clamp-1 leading-7 ${row && "px-1"}`}
    >
      {children}
    </th>
  );
}
export function Td({ children, row = false, center = false }: TProps) {
  return (
    <th
      className={`${row ? "w-[50px]" : "w-[280px]"} h-full flex ${
        center ? "justify-center" : "justify-start"
      } items-start line-clamp-1 leading-7 ${row && "px-2"}`}
    >
      {children}
    </th>
  );
}
