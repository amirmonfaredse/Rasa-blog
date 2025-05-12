"use client";
import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export function BlogContextProvider({ children }) {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [categorizedBlogs, setCategorizedBlog] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
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
