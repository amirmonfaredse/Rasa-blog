"use client";
import { useBlog } from "_data/fetchers";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function TextEditorEditBlog() {
  const { blogId } = useParams<{ blogId: string }>();
  const { blog } = useBlog(blogId);

  const editor = useRef(null);
  const [content, setContent] = useState<string | undefined>(
    () => blog?.content
  );

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
    setContent(blog?.content);
  }, [blog?.content]);

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
