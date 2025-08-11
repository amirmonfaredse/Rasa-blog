"use client";

import { useBlog } from "_data/fetchers";
import { useUpdateBlog } from "_data/mutate";
import { useAdminStore } from "_lib/store/store";
import TextInput from "_lib/validation/components/TextInput";
import { BlogSchema } from "_lib/validation/schema";
import { Field, Form, Formik } from "formik";
import { useParams } from "next/navigation";
import CategoriesList from "../_components/CategoriesList";
import TagInputUpdate from "../_components/tagInput/TagInputUpdate";
import TextEditorEditBlog from "../_components/textEditor/TextEditorEditBlog";
import EditButton from "./EditButton";
import { InitBlogFormProps } from "@/types/app/store/types";

export default function Page() {
  const { blogId } = useParams<{ blogId: string }>();
  const { blog } = useBlog(blogId);
  const { trigger, response, isMutating } = useUpdateBlog(blogId);
  const blogFieldsForm = useAdminStore.use.initBlogFields();

  const handleSubmit = async (values: InitBlogFormProps) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string | Blob);
    });
    await trigger(formData);
  };

  return (
    <Formik
      validationSchema={BlogSchema}
      initialValues={blogFieldsForm}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      enableReinitialize={true}
    >
      <Form className="w-full py-5">
        {blog && (
          <div className="w-[90%] flex flex-col gap-5">
            <Field name="id" hidden value={blog?.id} readOnly />
            <Field name="blogTitle" label="عنوان" component={TextInput} />
            <Field
              name="blogDescription"
              label="توضیحات"
              component={TextInput}
            />

            <Field
              name="blogImage"
              label="آدرس تصویر اصلی"
              component={TextInput}
            />
            <Field name="blogCategory" component={CategoriesList} />

            <Field name="textEditor" component={TextEditorEditBlog} />
            <Field name="blogTags" component={TagInputUpdate} />
            <EditButton isMutating={isMutating} />
          </div>
        )}
      </Form>
    </Formik>
  );
}
