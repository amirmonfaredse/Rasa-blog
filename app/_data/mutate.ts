"use client";
import { ActionResult, CategoryFieldProps } from "@/types/app/data/types";
import { PostgrestError } from "@supabase/supabase-js";
import { DeleteData, PostFormData, PutFormData } from "_data/http";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

export function useCreateBlog() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs",
    (url: string, { arg }: { arg: FormData }) =>
      PostFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PostFormData) => PostFormData,
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useCreateCategory() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs/categories",
    (url: string, { arg }: { arg: FormData }) =>
      PostFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PostFormData, categories) => [
        ...categories,
        PostFormData,
      ],
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}

export function useCreateTag() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs/tags",
    (url: string, { arg }: { arg: FormData }) =>
      PostFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PostFormData) => PostFormData,
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useCreateImage() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/media/images",
    (url: string, { arg }: { arg: FormData }) =>
      PostFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PostFormData) => PostFormData,
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useCreateContact() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/messages/contact",
    (url: string, { arg }: { arg: FormData }) =>
      PostFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PostFormData) => PostFormData,
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useCreateComment() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/messages/comments",
    (url: string, { arg }: { arg: FormData }) =>
      PostFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PostFormData) => PostFormData,
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useCreateSlider() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/pages",
    (url: string, { arg }: { arg: FormData }) =>
      PostFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PostFormData) => PostFormData,
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useUpdateBlog(id: string) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/blogs/${id}`,
    (url: string, { arg }: { arg: FormData }) =>
      PutFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PutFormData) => PutFormData,
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useUpdateCategory(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    !!id ? `/blogs/categories/${id}` : null,
    (url: string, { arg }: { arg: FormData }) =>
      PutFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PutFormData) => PutFormData,
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useUpdateTag(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    !!id ? `/blogs/tags/${id}` : null,
    (url: string, { arg }: { arg: FormData }) =>
      PutFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PutFormData) => PutFormData,
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useUpdateContact(id: string) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/messages/contact/${id}`,
    (url: string, { arg }: { arg: FormData }) =>
      PutFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PutFormData) => PutFormData,
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
// WATCH THIS !
export function useUpdateComment(id: string) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/messages/comments/${id}`,
    (url: string, { arg }: { arg: FormData }) =>
      PutFormData<CategoryFieldProps | PostgrestError>(url, arg),
    {
      populateCache: (PutFormData) => PutFormData,
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}

export function useDeleteBlog(id: string) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/blogs/${id}`,
    (url: string) => {
      PutFormData<CategoryFieldProps | PostgrestError>(url);
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useDeleteCategory(id: string) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/blogs/categories/${id}`,
    (url: string) => DeleteData<CategoryFieldProps | PostgrestError>(url),
    {
      onSuccess: () => {
        mutate(
          "/blogs/categories",
          (cats: CategoryFieldProps[] = []) =>
            cats.filter((cat) => cat.id !== id),
          false
        );
      },
    }
  );

  return { trigger, response: data, error, isMutating };
}
export function useDeleteTag(id: string) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/blogs/tags/${id}`,
    (url: string) => {
      DeleteData<CategoryFieldProps | PostgrestError>(url);
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useDeleteContact(id: string) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/messages/contact/${id}`,
    (url: string) => {
      DeleteData<CategoryFieldProps | PostgrestError>(url);
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useDeleteComment(id: string) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/messages/comments/${id}`,
    (url: string) => {
      DeleteData<CategoryFieldProps | PostgrestError>(url);
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useDeleteSlider(id: string) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/pages${id}`,
    (url: string) => {
      DeleteData<CategoryFieldProps | PostgrestError>(url);
    }
  );
  return { trigger, response: data, error, isMutating };
}
