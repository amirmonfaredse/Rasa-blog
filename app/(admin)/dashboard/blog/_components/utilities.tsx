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
  value,
}: {
  className?: string;
  required?: boolean;
  type?: string;
  defaultValue?: string | number;
  name?: string;
  hidden?: boolean;
  readOnly?: boolean;
  value?: string | number;
}) {
  return (
    <input
      required={required}
      readOnly={readOnly}
      hidden={hidden}
      name={name}
      type={type}
      defaultValue={defaultValue}
      value={value}
      className={`w-full border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2 ${className}`}
    />
  );
}
