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
  PutFormWithId,
} from "_data/http";
import {
  notifCategorizing,
  notifCreateBlog,
  notifCreateCategory,
  notifCreateImage,
  notifCreateSlider,
  notifCreateTag,
  notifSendComment,
  notifSendMessage,
  notifTagging,
  notifUpdateBlog,
  notifUpdateCategory,
  notifUpdateSlider,
  notifUpdateTag,
} from "_lib/notifications/mutating/helpers/formMutate.notifs";
import { useAdminStore } from "_lib/store/store";
import { useEffect } from "react";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

export function useCreateBlog() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs",
    PostFormData
  );
  useEffect(() => {
    notifCreateBlog(isMutating, data, error);
  }, [isMutating, data, error]);

  return { trigger, response: data, error, isMutating };
}
export function useCategorizing() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs/categories/categorized",
    PostDataWithId
  );
  useEffect(() => {
    notifCategorizing(isMutating, data, error);
  }, [isMutating, data, error]);

  return { trigger, response: data, error, isMutating };
}
export function useTagging() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs/tags/taggeds",
    PostDataWithId
  );
  useEffect(() => {
    notifTagging(isMutating, data, error);
  }, [isMutating, data, error]);

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
  useEffect(() => {
    notifCreateImage(isMutating, data, error);
  }, [isMutating, data, error]);

  return { trigger, response: data, error, isMutating };
}
export function useSendMessage() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/messages/contact",
    PostFormData
  );
  useEffect(() => {
    notifSendMessage(isMutating, data, error);
  }, [isMutating, data, error]);

  return { trigger, response: data, error, isMutating };
}
export function useSendComment() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/messages/comments",
    PostDataWithId
  );
  useEffect(() => {
    notifSendComment(isMutating, data, error);
  }, [isMutating, data, error]);
  return { trigger, response: data, error, isMutating };
}

export function useUpdateBlog(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/blogs/${id}`,
    PutFormData
  );
  useEffect(() => {
    notifUpdateBlog(isMutating, data, error);
  }, [isMutating, data, error]);

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
  useEffect(() => {
    notifCreateCategory(create.isMutating, create.data, create.error);
  }, [create.isMutating, create.data, create.error]);
  useEffect(() => {
    notifUpdateCategory(update.isMutating, update.data, update.error);
  }, [update.isMutating, update.data, update.error]);

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
  useEffect(() => {
    notifCreateTag(create.isMutating, create.data, create.error);
  }, [create.isMutating, create.data, create.error]);
  useEffect(() => {
    notifUpdateTag(update.isMutating, update.data, update.error);
  }, [update.isMutating, update.data, update.error]);

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
  useEffect(() => {
    notifCreateSlider(create.isMutating, create.data, create.error);
  }, [create.isMutating, create.data, create.error]);
  useEffect(() => {
    notifUpdateSlider(update.isMutating, update.data, update.error);
  }, [update.isMutating, update.data, update.error]);

  return {
    trigger: !!id ? update.trigger : create.trigger,
    response: !!id ? update.data : create.data,
    error: !!id ? update.error : create.error,
    isMutating: !!id ? update.isMutating : create.isMutating,
  };
}

// export function useUpdateContact(id: string | null) {
//   const { trigger, data, error, isMutating } = useSWRMutation(
//     `/messages/contact/${id}`,
//     PutFormData,
//     {
//       populateCache: (PutFormData, contacts) => {
//         const filteredContacts = contacts.filter(
//           (contact: MessageFieldProps) => contact.id !== PutFormData.id
//         );
//         return [...filteredContacts, PutFormData];
//       },
//       revalidate: false,
//     }
//   );
//   return { trigger, response: data, error, isMutating };
// }

export function useConfirmComment(id: string | null) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    !!id ? `/messages/comments/${id}` : null,
    PutFormWithId,
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
    !!id ? `/blogs/${id}` : null,
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
    !!id ? `/blogs/categories/${id}` : null,
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
    !!id ? `/messages/contact/${id}` : null,
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
    !!id ? `/messages/comments/${id}` : null,
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
    !!id ? `/pages/${id}` : null,
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
