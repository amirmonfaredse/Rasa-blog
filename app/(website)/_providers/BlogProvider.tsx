"use client";
import { BlogContextType } from "@/types/app/website/types";
import { createContext, useContext, useState } from "react";

const BlogContext = createContext<BlogContextType>({
  searchInputValue: "",
  setSearchInputValue: () => {},
  categorizedBlogs: [],
  setCategorizedBlog: () => {},
  checkedList: [],
  setCheckedList: () => {},
});

export function BlogContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [categorizedBlogs, setCategorizedBlog] = useState<string[]>([]);
  const [checkedList, setCheckedList] = useState<any[]>([]);
  return (
    <BlogContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        categorizedBlogs,
        setCategorizedBlog,
        checkedList,
        setCheckedList,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined)
    throw new Error("Blog Context Used Outside Of Provider");
  return context;
}
