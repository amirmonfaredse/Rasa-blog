"use client";
import { useCategorizing, useCreateBlog, useTagging } from "_data/mutate";
import CategoriesList from "../_components/CategoriesList";
import TextEditorCreateBlog from "../_components/textEditor/TextEditorCreateBlog";
import { Input, Label } from "../_components/utilities";
import TagInputCreate from "../_components/tagInput/TagInputCreate";
import ReleaseButton from "../_components/buttons/ReleaseButton";

export default function Page() {
  const {
    trigger: createBlog,
    response: blog,
    isMutating: isCreatingBlog,
  } = useCreateBlog();
  const {
    trigger: categorize,
    response: categorized,
    isMutating: isCategorizing,
  } = useCategorizing();
  const {
    trigger: tagging,
    response: tagged,
    isMutating: isTagging,
  } = useTagging();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const blogRes = await createBlog(formData);
    if (blogRes) {
      await categorize({ formData, exteraId: blogRes.id });
      await tagging({ formData, exteraId: blogRes.id });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-fit flex flex-col justify-center items-start py-5 pt-10 md:pt-5 px-1 pl-3"
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
      <TagInputCreate />
      <ReleaseButton pending={isCreatingBlog} />
    </form>
  );
}
