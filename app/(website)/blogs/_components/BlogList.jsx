"use client";
import { useEffect, useState } from "react";
import { useBlogContext } from "../../_providers/BlogProvider";
import dynamic from "next/dynamic";
const PostCard = dynamic(() => import("../../_components/cards/PostCard"), {
  ssr: false,
});
function BlogList({ blogs }) {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const { searchInputValue, categorizedBlogs, checkedList } = useBlogContext();
  useEffect(() => {
    if (checkedList.length > 0) {
      setFilteredBlogs(
        blogs
          .filter((blog) => categorizedBlogs.includes(blog.id))
          .filter((blog) => blog.title.includes(searchInputValue))
      );
    } else {
      setFilteredBlogs(
        blogs.filter((blog) => blog.title.includes(searchInputValue))
      );
    }
  }, [blogs, searchInputValue, categorizedBlogs, checkedList.length]);

  return (
    <div className="w-full sm:w-[65%] md:w-[70%] h-full flex flex-col gap-12">
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog, index) => (
          <PostCard
            id={blog.id}
            title={blog.title}
            author={blog.author}
            created_at={blog.created_at}
            image={blog.image}
            content={blog.content}
            key={`blog-${blog.id}-${index}`}
          />
        ))
      ) : (
        <div>پستی وجود ندارد ...</div>
      )}
    </div>
  );
}

export default BlogList;
