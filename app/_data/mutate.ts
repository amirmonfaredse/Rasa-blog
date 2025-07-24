"use client";
import { UseUpsertCategory } from "@/types/app/admin/types";
import {
  BlogFieldProps,
  CategoryFieldsProps,
  CommentFieldProps,
  MessageFieldProps,
  SlideFieldProps,
  TagFieldProps,
} from "@/types/app/data/types";
import { DeleteData, PostFormData, PutFormData } from "_data/http";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

export function useCreateBlog() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs",
    PostFormData
  );
  return { trigger, response: data, error, isMutating };
}

export function useCreateTag() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs/tags",
    PostFormData,
    {
      populateCache: (PostFormData, tags) => [...tags, PostFormData],
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useCreateImage() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/media/images",
    PostFormData,
    {
      populateCache: (PostFormData, images) => [...images, PostFormData],
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useCreateContact() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/messages/contact",
    PostFormData
  );
  return { trigger, response: data, error, isMutating };
}
export function useCreateComment() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/messages/comments",
    PostFormData
  );
  return { trigger, response: data, error, isMutating };
}
export function useCreateSlider() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/pages",
    PostFormData,
    {
      populateCache: (PostFormData, sliders) => [...sliders, PostFormData],
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}

export function useUpdateBlog(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/blogs/${id}`,
    PutFormData
  );
  return { trigger, response: data, error, isMutating };
}

export function useUpsertCategory(id: string): UseUpsertCategory {
  const create = useSWRMutation(
    !!id ? null : "/blogs/categories",
    PostFormData,
    {
      populateCache: (PostFormData, categories) => [
        ...categories,
        PostFormData,
      ],
      revalidate: false,
    }
  );
  const update = useSWRMutation(
    !!id ? `/blogs/categories/${id}` : null,
    PutFormData,
    {
      onSuccess: (data) => {
        mutate(
          "/blogs/categories",
          (cats = []) => {
            const filtered = cats.filter(
              (cat: CategoryFieldsProps) => cat.id !== data.id
            );
            return [...filtered, data];
          },
          false
        );
      },
    }
  );

  return {
    trigger: !!id ? update.trigger : create.trigger,
    response: !!id ? update.data : create.data,
    error: !!id ? update.error : create.error,
    isMutating: !!id ? update.isMutating : create.isMutating,
  };
}

export function useUpdateTag(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    !!id ? `/blogs/tags/${id}` : null,
    PutFormData,
    {
      populateCache: (PutFormData, tags) => {
        const filteredTags = tags.filter(
          (tag: TagFieldProps) => tag.id !== PutFormData.id
        );
        return [...filteredTags, PutFormData];
      },
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useUpdateContact(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/messages/contact/${id}`,
    PutFormData,
    {
      populateCache: (PutFormData, contacts) => {
        const filteredContacts = contacts.filter(
          (contact: MessageFieldProps) => contact.id !== PutFormData.id
        );
        return [...filteredContacts, PutFormData];
      },
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
// WATCH THIS !
export function useUpdateComment(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/messages/comments/${id}`,
    PutFormData,
    {
      populateCache: (PutFormData, comments) => {
        const filteredComments = comments.filter(
          (comment: CommentFieldProps) => comment.id !== PutFormData.id
        );
        return [...filteredComments, PutFormData];
      },
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}

export function useDeleteBlog(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/blogs/${id}`,
    DeleteData,
    {
      populateCache: (DeleteData, blogs) => {
        const filteredBlogs = blogs.filter(
          (blog: BlogFieldProps) => blog.id !== DeleteData.id
        );
        return [...filteredBlogs];
      },
      revalidate: false,
    }
  );

  return { trigger, response: data, error, isMutating };
}
export function useDeleteCategory(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/blogs/categories/${id}`,
    DeleteData,
    {
      onSuccess: (data) => {
        mutate(
          "/blogs/categories",
          (cats = []) =>
            cats.filter((cat: CategoryFieldsProps) => cat.id !== data.id),
          false
        );
      },

      revalidate: false,
    }
  );

  return { trigger, response: data, error, isMutating };
}
export function useDeleteTag(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/blogs/tags/${id}`,
    DeleteData,
    {
      populateCache: (DeleteData, tags) => {
        const filteredTags = tags.filter(
          (tag: TagFieldProps) => tag.id !== DeleteData.id
        );
        return [...filteredTags];
      },
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useDeleteContact(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/messages/contact/${id}`,
    DeleteData,
    {
      populateCache: (DeleteData, contacts) => {
        const filteredContacts = contacts.filter(
          (contact: MessageFieldProps) => contact.id !== DeleteData.id
        );
        return [...filteredContacts];
      },
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useDeleteComment(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/messages/comments/${id}`,
    DeleteData,
    {
      populateCache: (DeleteData, comments) => {
        const filteredComments = comments.filter(
          (comment: CommentFieldProps) => comment.id !== DeleteData.id
        );
        return [...filteredComments];
      },
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useDeleteSlider(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/pages${id}`,
    DeleteData,
    {
      populateCache: (DeleteData, sliders) => {
        const filteredSliders = sliders.filter(
          (slider: SlideFieldProps) => slider.id !== DeleteData.id
        );
        return [...filteredSliders];
      },
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
