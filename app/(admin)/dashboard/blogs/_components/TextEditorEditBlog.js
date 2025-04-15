"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function TextEditorEditBlog({ defaultContent }) {
  const editor = useRef(null);
  const [value, setValue] = useState(() => defaultContent);
  const config = useMemo(
    () => ({
      direction: "rtl",
      language: "fa",
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
    }),
    []
  );
  useEffect(() => {
     
    setValue(defaultContent); 
  }, [defaultContent]);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div className="h-fit w-fit flex items-center justify-center ">
      <div className="w-[1000px] h-fit">
        <JoditEditor
          ref={editor}
          name="textEditor"
          config={config}
          onBlur={handleChange}
          value={value}
          className="w-full h-[70%] mt-10 bg-white"
        />
        <style>{`.jodit-wysiwyg{height:300px !important}`}</style>
      </div>
    </div>
  );
}
