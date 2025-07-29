"use client";
import {
  UseUpsertCategory,
  UseUpsertSlider,
  UseUpsertTag,
} from "@/types/app/admin/types";
import {
  BlogFieldProps,
  CategoryFieldsProps,
  CommentFieldProps,
  MessageFieldProps,
  SlideFieldProps,
  TagFieldProps,
} from "@/types/app/data/types";
import {
  DeleteData,
  PostDataWithId,
  PostFormData,
  PutFormData,
} from "_data/http";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

export function useCreateBlog() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs",
    PostFormData
  );
  return { trigger, response: data, error, isMutating };
}
export function useCategorizing() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs/categories/categorized",
    PostDataWithId
  );
  return { trigger, response: data, error, isMutating };
}
export function useTagging() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs/tags/taggeds",
    PostDataWithId
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
      populateCache: (PostFormData, categories = []) => [
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
      revalidate: false,
    }
  );

  return {
    trigger: !!id ? update.trigger : create.trigger,
    response: !!id ? update.data : create.data,
    error: !!id ? update.error : create.error,
    isMutating: !!id ? update.isMutating : create.isMutating,
  };
}

export function useUpsertTag(id: string): UseUpsertTag {
  const create = useSWRMutation(!!id ? null : "/blogs/tags", PostFormData, {
    populateCache: (PostFormData, tags = []) => [...tags, PostFormData],
    revalidate: false,
  });
  const update = useSWRMutation(
    !!id ? `/blogs/tags/${id}` : null,
    PutFormData,
    {
      onSuccess: (data) => {
        mutate(
          "/blogs/tags",
          (tags = []) => {
            const filtered = tags.filter(
              (tag: TagFieldProps) => tag.id !== data.id
            );
            return [...filtered, data];
          },
          false
        );
      },
      revalidate: false,
    }
  );
  return {
    trigger: !!id ? update.trigger : create.trigger,
    response: !!id ? update.data : create.data,
    error: !!id ? update.error : create.error,
    isMutating: !id ? update.isMutating : create.isMutating,
  };
}

export function useUpsertSlider(id: string): UseUpsertSlider {
  const create = useSWRMutation(!!id ? null : "/pages", PostFormData, {
    populateCache: (PostFormData, sliders = []) => [...sliders, PostFormData],
    revalidate: false,
  });
  const update = useSWRMutation(!!id ? `/pages/${id}` : null, PutFormData, {
    onSuccess: (data) => {
      mutate(
        "/pages",
        (sliders = []) => {
          const filtered = sliders.filter(
            (slide: SlideFieldProps) => slide.id !== data.id
          );
          return [...filtered, data];
        },
        false
      );
    },
    revalidate: false,
  });
  return {
    trigger: !!id ? update.trigger : create.trigger,
    response: !!id ? update.data : create.data,
    error: !!id ? update.error : create.error,
    isMutating: !!id ? update.isMutating : create.isMutating,
  };
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
export function useUpdateComment(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/messages/comments/${id}`,
    PutFormData,
    {
      onSuccess: (data) => {
        mutate(
          "/messages/comments",
          (comments = []) => {
            const filtered = comments.filter(
              (comment: CommentFieldProps) => comment.id !== data.id
            );
            return [...filtered, data];
          },
          false
        );
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
      onSuccess: (data) => {
        mutate(
          "/blogs",
          (blogs = []) =>
            blogs.filter((blog: BlogFieldProps) => blog.id !== data.id),
          false
        );
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
    !!id ? `/blogs/tags/${id}` : null,
    DeleteData,
    {
      onSuccess: (data) => {
        mutate(
          "/blogs/tags",
          (tags = []) =>
            tags.filter((tag: TagFieldProps) => tag.id !== data.id),
          false
        );
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
      onSuccess: (data) => {
        mutate(
          "/messages/contact/",
          (contacts = []) =>
            contacts.filter(
              (contact: MessageFieldProps) => contact.id !== data.id
            ),
          false
        );
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
      onSuccess: (data) => {
        mutate(
          "/messages/comments/",
          (comments = []) =>
            comments.filter(
              (comment: CommentFieldProps) => comment.id !== data.id
            ),
          false
        );
      },
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
export function useDeleteSlider(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/pages/${id}`,
    DeleteData,
    {
      onSuccess: (data) => {
        mutate(
          "/pages",
          (sliders = []) =>
            sliders.filter((slider: SlideFieldProps) => slider.id !== data.id),
          false
        );
      },
      revalidate: false,
    }
  );
  return { trigger, response: data, error, isMutating };
}
