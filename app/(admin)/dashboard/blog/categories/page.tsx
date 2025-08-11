"use client";
import { useCategories } from "_data/fetchers";
import { useAdminStore } from "_lib/store/store";
import { Mode } from "@/types/app/store/types";
import DeleteButtonCategory from "../_components/buttons/DeleteButtonCategory";
import CategoryForm from "./CategoryForm";

export default function Page() {
  const { categories } = useCategories();
  const onFormMode = useAdminStore.use.onCatFormMode();
  const onCatFields = useAdminStore.use.onCatFields();
  const setCatId = useAdminStore.use.setCatId();

  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 px-2">
      <div className="w-1/2 lg:w-[50%] py-5 px-2 flex flex-col gap-5">
        <h2 className="text-lg text-ghost-900 border border-ghost-700 px-5 py-2 rounded-md ">
          همه دسته بندی ها :
        </h2>
        {categories &&
          categories.map((cat, index) => (
            <div
              className="w-full h-[35px] flex items-center justify-between border-2 border-folly-200 rounded-sm  px-2"
              key={`${index}-${cat.id}`}
            >
              <p className="text-ghost-900 p-1 text-sm rounded-full">
                {index + 1}
              </p>
              <h4 className="flex justify-start text-ghost-900">{cat.title}</h4>
              <div>
                <button
                  onClick={() => {
                    onFormMode(Mode.Put);
                    onCatFields(cat);
                    setCatId(cat.id);
                  }}
                  className="text-xs mx-2 "
                >
                  ویرایش
                </button>
                <DeleteButtonCategory catId={cat.id} />
              </div>
            </div>
          ))}
      </div>
      <CategoryForm />
    </div>
  );
}
