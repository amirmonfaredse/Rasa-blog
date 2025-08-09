import { useField } from "formik";
import { useEffect } from "react";

export default function ColorInput({ ...props }: any) {
  const [field, meta, helpers] = useField(props.name);

  return (
    <label htmlFor={props.name} className="w-full  flex flex-col gap-1 ">
      <h2 className="flex gap-1 text-avocado-600 text-sm">{props.label} :</h2>
      <input
        {...field}
        {...props}
        type="color"
        onChange={(e) => helpers.setValue(e.target.value)}
        className="cursor-pointer"
      />
      <div className="w-full h-5 text-folly-600 text-xs">{meta.error}</div>
    </label>
  );
}
