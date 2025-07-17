"use client";

import { useCategories, useCategorizeds } from "_data/fetchers";

export default function CategoriesList({ blogId }: { blogId?: string }) {
  const { categories } = useCategories();
  let { categorizeds } = useCategorizeds();
  if (blogId) {
    categorizeds = categorizeds.filter((cat) => cat.blogId === blogId);
  }
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="w-full h-36 flex flex-col gap-1 overflow-y-scroll text-ghost-900 text-sm border-2 border-ghost-1000 rounded p-2 py-1.5  ">
        {categories?.map((cat, index) => (
          <label
            key={`${index}-${cat.id}`}
            className="flex bg-ghost-100 items-center justify-start px-2 cursor-pointer"
          >
            {cat.title}
            <input
              type="checkbox"
              className="flex m-2"
              value={cat.id}
              defaultChecked={categorizeds?.some(
                (obj) => obj.categoryId === cat.id
              )}
              name="blogCategory"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
