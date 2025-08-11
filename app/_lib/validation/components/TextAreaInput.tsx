export default function TextAreaInput({ field, form, ...props }: any) {
  return (
    <label htmlFor={props.name} className="w-full flex flex-col gap-1 ">
      <h2 className="text-ghost-900">{props.label} :</h2>
      <textarea
        {...field}
        {...props}
        rows={10}
        className="w-full border-2 mt-4 p-2  border-ghost-600 bg-ghost-100 shadow-xl outline-none"
      />
      <div className="w-full h-5 text-folly-600 text-xs">
        {form.errors[field.name]}
      </div>
    </label>
  );
}
