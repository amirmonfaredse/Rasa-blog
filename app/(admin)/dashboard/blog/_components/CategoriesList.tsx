"use client";

import { CategoryFieldsProps } from "@/types/app/data/types";
import { useCategories, useCategorized } from "_data/fetchers";
import { useParams } from "next/navigation";

export default function CategoriesList() {
  const { blogId } = useParams<{ blogId: string }>();

  const { categories } = useCategories();
  const { categorized } = useCategorized(blogId);
  function onCheck(cat: CategoryFieldsProps): boolean {
    return categorized?.some((catez) => catez.categoryId === cat.id) ?? false;
  }

  return (
    <div className="w-full max-w-sm min-w-[200px] ">
      <div className="w-full h-36 flex flex-col gap-1 overflow-y-auto no-scrollbar text-ghost-900 text-sm border-2 border-ghost-1000 rounded p-2 py-1.5  ">
        {categories &&
          categories.map((cat, index) => (
            <label
              key={`${index}-${cat.id}`}
              className="flex bg-ghost-100 items-center justify-start px-2 cursor-pointer"
            >
              {cat.title}
              <input
                type="checkbox"
                className="flex m-2"
                value={cat.id}
                defaultChecked={onCheck(cat)}
                name="blogCategory"
              />
            </label>
          ))}
      </div>
    </div>
  );
}
