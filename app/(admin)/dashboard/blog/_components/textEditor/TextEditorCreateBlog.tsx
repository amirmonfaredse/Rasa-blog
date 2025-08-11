"use client";
import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function TextEditorCreateBlog({ field, form, ...props }: any) {
  const editor = useRef(null);
  const [content, setContent] = useState<string>("");
  const config = useMemo(
    () => ({
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
    }),
    []
  );

  const handleChange = (value: string) => {
    setContent(value);
    form.setFieldValue(field.name, value);
  };

  return (
    <div className="w-[95%] md:w-full h-fit flex items-center justify-center">
      <div className="w-full h-fit">
        <JoditEditor
          {...field}
          {...props}
          ref={editor}
          config={config}
          onBlur={handleChange}
          value={content}
          className="w-full h-[70%] mt-10 bg-white"
        />

        <style>{`.jodit-wysiwyg{height:300px !important}`}</style>
      </div>
    </div>
  );
}
