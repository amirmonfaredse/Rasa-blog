import { useEffect } from "react";

export default function TextInput({ field, form, ...props }: any) {
  return (
    <label htmlFor={props.name} className="w-full flex flex-col gap-1 ">
      <h2 className="text-ghost-900">{props.label} :</h2>
      <input
        {...field}
        {...props}
        className="w-full border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
      />
      <div className="w-full h-5 text-folly-600 text-xs">
        {form.errors[field.name]}
      </div>
    </label>
  );
}
