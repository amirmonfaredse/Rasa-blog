"use client";
import { useBlogContext } from "../../_providers/BlogProvider";

export default function Sidebar({ categories, categorized }) {
  const {
    setSearchInputValue,
    categorizedBlogs,
    setCategorizedBlog,
    checkedList,
    setCheckedList,
  } = useBlogContext();
  function onSearchInp(e) {
    setSearchInputValue(e.target.value);
  }

  function onCheckInp(e) {
    const targetId = Number(e.target.id);
    setCheckedList([...checkedList, targetId]);
    if (e.target.checked) {
      categorized.map((c) => {
        const cId = Number(c.categoryId);
        const blogId = Number(c.blogId);
        if (cId === targetId && !categorizedBlogs.includes(blogId))
          setCategorizedBlog([...categorizedBlogs, blogId]);
      });
    } else {
      // Remove Category [id] from the categorizedBlog List
      categorized.map((c) => {
        if (Number(c.categoryId) === Number(e.target.id)) {
          setCategorizedBlog(categorizedBlogs.filter((b) => b !== c.blogId));
        }
      });
      setCheckedList(checkedList.filter((c) => c !== targetId));
    }
  }

  return (
    <div className="w-full sm:w-[30%] md:w-[25%] h-fit  border shadow-md p-4 mb-10">
      <div className="w-full h-fit flex flex-col justify-evenly my-5 gap-2">
        <label className="text-sm ">جستجو :</label>
        <input
          onChange={onSearchInp}
          className="w-full h-[50px] p-2 outline-none border-2 border-ghost-600 shadow-md"
          type="search"
        />
      </div>
      <div className="w-full h-fit max-h-[400px] overflow-scroll no-scrollbar flex flex-col justify-evenly my-5 gap-2">
        {categories.length > 0 && (
          <>
            <label className="text-sm ">دسته بندی ها :</label>
            {categories.map((cat, index) => (
              <label
                key={`${cat.id}-${index}`}
                className="w-full h-[40px] my-1 flex justify-between items-center shadow-md bg-ghost-100 text-ghost-800 px-2 "
              >
                {cat.title}
                <input
                  type="checkbox"
                  value={cat.name}
                  id={cat.id}
                  className="w-[30px] h-[20px] mx-2 "
                  name="catCheckbox"
                  onChange={onCheckInp}
                />
              </label>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
