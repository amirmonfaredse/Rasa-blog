"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { htmlToText } from "html-to-text";
export default function FilterBlogs({ blogs, categories }) {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  function handleSearchInput(e) {
    setSearchInputValue(e.target.value);
  }
  function handleCheckboxes(e) {
    if (e.target.checked) {
      setCheckedCategories((prev) => [...prev, e.target.value]);
    } else {
      setCheckedCategories((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    }
  }

  useEffect(() => {
    let filterBasedOnCategories = [];
    blogs.forEach((blog) => {
      if (checkedCategories.length > 0) {
        checkedCategories.forEach((cat) => {
          if (blog.categories.includes(cat)) {
            filterBasedOnCategories.push(blog);
          }
        });
      } else {
        filterBasedOnCategories.push(blog);
      }
    });
    const filterBasedOnSearchInput = filterBasedOnCategories.filter((blog) =>
      blog.title.includes(searchInputValue)
    );
    setFilteredBlogs(filterBasedOnSearchInput);
  }, [searchInputValue, checkedCategories, blogs]);
  return (
    <>
      <div className="w-full sm:w-[30%] md:w-[25%] h-fit  border border-sm rounded-lg p-2 mb-10">
        <div className="w-full h-fit flex flex-col justify-evenly my-5 gap-2">
          <label className="text-sm ">جستجو :</label>
          <input
            onChange={handleSearchInput}
            className="w-full h-[35px] p-2 bg-gray-500 rounded-md"
            type="search"
          />
        </div>
        <div className="w-full h-fit flex flex-col justify-evenly my-5 gap-2">
          {categories.length > 0 && (
            <>
              <label className="text-sm ">دسته بندی ها :</label>
              {categories.map((cat, index) => (
                <label
                  key={`${cat.id}-${index}`}
                  className="w-full h-[30px] my-2 flex justify-between items-center bg-gray-700 p-2"
                >
                  {cat.title}
                  <input
                    type="checkbox"
                    value={cat.name}
                    className="w-[20px] mx-2"
                    name="catCheckbox"
                    onChange={handleCheckboxes}
                  />
                </label>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="w-full sm:w-[65%] md:w-[70%] h-full flex flex-col ">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div
              key={`${index}-${blog.id}`}
              className="h-fit border mb-8 border-gray-100 rounded-xl"
            >
              <div className="h-fit sm:h-[50px]flex flex-col items-start justify-start sm:mx-6 mt-2 sm:mt-4 ">
                <h1 className="text-2xl p-4">{blog.title}</h1>
              </div>
              <div className="mx-3 my-3">
                <div className="h-[200px] w-full line-clamp-5  text-sm leading-10 text-gray-300 ">
                  {/* CONTENT  */}
                  {htmlToText(blog.content)}
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-xs mx-2 text-gray-400">توسط : </span>
                    <span className="text-xs text-center">{blog.author}</span>
                  </div>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="w-[100px] h-[40px] flex items-center justify-center border border-sm rounded-lg text-sm text-gray-400"
                  >
                    ادامه مطلب
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>خالی است</div>
        )}
      </div>
    </>
  );
}
