export function Label({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <label className={`flex flex-col gap-3 ${className}`}>
      <h2 className="text-ghost-900">{title} :</h2>

      {children}
    </label>
  );
}

export function Input({
  className,
  required = false,
  type = "text",
  defaultValue = "",
  name,
  hidden = false,
  readOnly = false,
}: {
  className?: string;
  required?: boolean;
  type?: string;
  defaultValue?: string | number;
  name?: string;
  hidden?: boolean;
  readOnly?: boolean;
}) {
  return (
    <input
      required={required}
      readOnly={readOnly}
      hidden={hidden}
      name={name}
      type={type}
      defaultValue={defaultValue}
      className={`w-full border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2 ${className}`}
    />
  );
}
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
