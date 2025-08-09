"use client";

import { useSendMessage } from "_data/mutate";
import TextAreaInput from "_lib/validation/components/TextAreaInput";
import TextInput from "_lib/validation/components/TextInput";
import { ContactSchema } from "_lib/validation/schema";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import SpinnerLoader from "utility/loaders/SpinnerLoader";
export type InitContactProps = {
  fullName: string;
  email: string;
  message: string;
};
function FormContact() {
  const { trigger, response, isMutating } = useSendMessage();

  const handleSubmit = async (values, actions) => {
    console.log(values);
    // e.preventDefault();
    // const formData = new FormData();
    // await trigger(formData);
  };
  const initForm = {
    fullName: "",
    email: "",
    message: "",
  };

  const [initFieldsState, setInitFieldsState] =
    useState<InitContactProps>(initForm);
  return (
    <Formik
      validationSchema={ContactSchema}
      initialValues={initFieldsState}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      enableReinitialize={true}
    >
      <Form className="w-full md:w-[50%] flex flex-col items-center px-2 md:px-0 mt-5 md:mt-2 md:mx-auto ">
        <Field
          label="نام و نام خانوادگی"
          name="fullName"
          component={TextInput}
        />
        <Field label="ایمیل" name="email" component={TextInput} />
        <Field label="متن پیام" name="message" component={TextAreaInput} />
        <button
          type="submit"
          className="w-full md:w-[300px] h-12 flex items-center justify-center  bg-ghost-800 text-ghost-100  my-4 rounded-md cursor-pointer hover:bg-ghost-600 transition-colors duration-400"
          disabled={isMutating}
        >
          {isMutating ? <SpinnerLoader /> : "ارسال پیام"}
        </button>
      </Form>
    </Formik>
  );
}

export default FormContact;
