"use client";
import { TextEditorEditBlogProps } from "@/types/app/admin/types";
import { ActionResult } from "next/dist/server/app-render/types";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function TextEditorEditBlog({
  defaultContent,
  formState,
}: TextEditorEditBlogProps) {
  const editor = useRef(null);
  const [content, setContent] = useState<string>(() => defaultContent);
  const config = useMemo(
    () => ({
      direction: "rtl" as const,
      language: "fa",
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
    }),
    []
  );
  useEffect(() => {
    setContent(defaultContent);
  }, [defaultContent]);
  useEffect(() => {
    if (formState.status === "success") setContent("");
  }, [formState]);

  const handleChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className="h-fit w-fit flex items-center justify-center ">
      <div className="w-[1000px] h-fit">
        <JoditEditor
          ref={editor}
          name="textEditor"
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
