"use client";

import { useCategories, useCategorized } from "_data/fetchers";
import { useAdminStore } from "_lib/store/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function CategoriesList() {
  const { blogId } = useParams<{ blogId: string }>();

  const { categories } = useCategories();
  const { categorized } = useCategorized(blogId);
  useEffect(() => {
    console.log(categorized);
  }, [categorized]);
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="w-full h-36 flex flex-col gap-1 overflow-y-scroll text-ghost-900 text-sm border-2 border-ghost-1000 rounded p-2 py-1.5  ">
        {categories &&
          categories?.map((cat, index) => (
            <label
              key={`${index}-${cat.id}`}
              className="flex bg-ghost-100 items-center justify-start px-2 cursor-pointer"
            >
              {cat.title}
              <input
                type="checkbox"
                className="flex m-2"
                value={cat.id}
                defaultChecked={categorized?.some(
                  (catez) => catez.categoryId === cat.id
                )}
                name="blogCategory"
              />
            </label>
          ))}
      </div>
    </div>
  );
}
