"use client";
import { BlogInitFieldsProps } from "@/types/app/data/types";
import { useCategorizing, useCreateBlog, useTagging } from "_data/mutate";
import { BlogSchema } from "_lib/validation/schema";
import { Field, Form, Formik } from "formik";
import ReleaseButton from "../_components/buttons/ReleaseButton";
import CategoriesList from "../_components/CategoriesList";
import TagInputCreate from "../_components/tagInput/TagInputCreate";
import TextEditorCreateBlog from "../_components/textEditor/TextEditorCreateBlog";
import TextInput from "_lib/validation/components/TextInput";
export default function Page() {
  const { trigger: createBlog, isMutating: isCreatingBlog } = useCreateBlog();
  const { trigger: categorize } = useCategorizing();
  const { trigger: tagging } = useTagging();

  const initForm: BlogInitFieldsProps = {
    blogTitle: "",
    blogDescription: "",
    blogImage: "",
    blogCategory: [],
    textEditor: "",
    blogTags: "",
  };
  const handleSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    // const formData = new FormData(e.currentTarget);
    // const blogRes = await createBlog(formData);
    // if (blogRes) {
    //   await categorize({ formData, exteraId: blogRes.id });
    //   await tagging({ formData, exteraId: blogRes.id });
    // }
  };

  return (
    <Formik
      validationSchema={BlogSchema}
      initialValues={initForm}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form className="w-full h-fit flex flex-col justify-center items-start py-5 pt-10 md:pt-5 px-1 pl-3">
        <div className="w-[95%] lg:w-[90%] flex flex-col gap-5">
          <Field name="blogTitle" label="عنوان" component={TextInput} />
          <Field name="blogDescription" label="توضیحات" component={TextInput} />
          <Field
            name="blogImage"
            label="آدرس تصویر اصلی"
            component={TextInput}
          />
          <Field name="blogCategory" component={CategoriesList} />
        </div>
        <Field name="textEditor" component={TextEditorCreateBlog} />
        <Field name="blogTags" component={TagInputCreate} />
        <ReleaseButton pending={isCreatingBlog} />
      </Form>
    </Formik>
  );
}
