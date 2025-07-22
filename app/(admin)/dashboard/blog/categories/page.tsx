"use client";
import { useCategories } from "_data/fetchers";
import { useAdminStore } from "_lib/store/store";
import { useRouter } from "next/navigation";
import DeleteButtonCategory from "../_components/DeleteButtonCategory";
import EditCategoryForm from "./EditCategoryForm";
import NewCategoryForm from "./NewCategoryForm";

export default function Page() {
  const { categories } = useCategories();
  const categoryFormMode = useAdminStore.use.categoryFormMode();
  const onFormMode = useAdminStore.use.onCategoryForm();

  const router = useRouter();
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-[50%] py-5 px-2 flex flex-col gap-5">
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
                    onFormMode();
                    router.push(`?catId=${cat.id}`);
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
      {categoryFormMode ? <NewCategoryForm /> : <EditCategoryForm />}
    </div>
  );
}
