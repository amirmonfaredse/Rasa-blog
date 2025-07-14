"use client";
import { useAdminStore } from "(admin)/_providers/StoreProvider";
import { useCreateBlog } from "_data/fetchers";
import CategoriesList from "../_components/CategoriesList";
import TextEditorCreateBlog from "../_components/TextEditorCreateBlog";
import { Input, Label } from "../_components/utilities";
import ReleaseButton from "./ReleaseButton";

export default function Page() {
  const showToast = useAdminStore((state) => state.showToast);
  const { trigger, data, error, isMutating } = useCreateBlog();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const results = await trigger(formData);
    results.forEach((result) => showToast(result));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-fit flex flex-col justify-center items-center py-5 pt-10 md:pt-5 px-1"
    >
      <div className="w-[95%] lg:w-[90%] flex flex-col gap-5">
        <Label title="عنوان">
          <Input required name="blogTitle" />
        </Label>
        <Label title="توضیحات">
          <Input required name="blogDescription" />
        </Label>
        <Label title="آدرس تصویر اصلی">
          <Input name="blogImage" />
        </Label>
        <Label title="دسته بندی ها">
          <CategoriesList />
        </Label>
      </div>
      <TextEditorCreateBlog />
      {/* <TagInput /> */}
      <ReleaseButton pending={isMutating} />
    </form>
  );
}
