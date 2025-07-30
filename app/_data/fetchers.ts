"use client";
import type {
  useBlogResult,
  useBlogsResult,
  useCategoriesResult,
  useCategorizedResult,
  useCategoryResult,
  useCommentResult,
  useCommentsResult,
  useConfirmedCommentsResult,
  useImageFilesResult,
  useMessageResult,
  useMessagesResult,
  useSliderResult,
  useSlidersResult,
  useTaggedListResult,
  useTaggedResult,
  useTagResult,
  useTagsResult,
} from "@/types/app/admin/hooks";
import useSWR from "swr";
import { api } from "./http";
const fetcher = (url: string) => api.get(url).then((res) => res.data);

export function useBlogs(): useBlogsResult {
  const { data, error, isLoading } = useSWR("/blogs", fetcher);
  return {
    blogs: data,
    isLoading,
    isError: error,
  };
}
export function useBlog(id: string | null): useBlogResult {
  const { data, error, isLoading } = useSWR(
    !!id ? `/blogs/${id}` : null,
    fetcher
  );
  return {
    blog: data,
    isLoading,
    isError: error,
  };
}
export function useCategories(): useCategoriesResult {
  const { data, error, isLoading } = useSWR("/blogs/categories", fetcher);
  return { categories: data, isLoading, isError: error };
}
export function useCategory(id: string | null): useCategoryResult {
  const { data, error, isLoading } = useSWR(
    !!id ? `/blogs/categories/${id}` : null,
    fetcher
  );
  return { category: data, isLoading, isError: error };
}
export function useCategorized(id: string | null): useCategorizedResult {
  const { data, error, isLoading } = useSWR(
    !!id ? `/blogs/categories/categorized/${id}` : null,
    fetcher
  );
  return { categorized: data, isLoading, isError: error };
}
export function useTags(): useTagsResult {
  const { data, error, isLoading } = useSWR("/blogs/tags", fetcher);
  return { tags: data, isLoading, isError: error };
}

export function useTag(id: string | null): useTagResult {
  const { data, error, isLoading } = useSWR(
    !!id ? `/blogs/tags/${id}` : null,
    fetcher
  );
  return { tag: data, isLoading, isError: error };
}

export function useTaggedList(): useTaggedListResult {
  const { data, error, isLoading } = useSWR("/blogs/tags/taggeds", fetcher);
  return { taggedList: data, isLoading, isError: error };
}
export function useTagged(id: string | null): useTaggedResult {
  const { data, error, isLoading } = useSWR(
    !!id ? `/blogs/tags/taggeds/${id}` : null,
    fetcher
  );
  return { tagged: data, isLoading, isError: error };
}

export function  useImageFiles(): useImageFilesResult {
  const { data, error, isLoading } = useSWR("/media/images", fetcher);
  return { images: data, isLoading, isError: error };
}

export function useMessages(): useMessagesResult {
  const { data, error, isLoading } = useSWR("/messages/contact", fetcher);
  return { messages: data, isLoading, isError: error };
}

export function useMessage(id: string | null): useMessageResult {
  const { data, error, isLoading } = useSWR(
    !!id ? `/messages/contact/${id}` : null,
    fetcher
  );
  return { message: data, isLoading, isError: error };
}

export function useComments(): useCommentsResult {
  const { data, error, isLoading } = useSWR("/messages/comments", fetcher);
  return { comments: data, isLoading, isError: error };
}
export function useComment(id: string | null): useCommentResult {
  const { data, error, isLoading } = useSWR(
    !!id ? `/messages/comments/${id}` : null,
    fetcher
  );
  return { comment: data, isLoading, isError: error };
}
export function useConfirmedComments(): useConfirmedCommentsResult {
  const { data, error, isLoading } = useSWR("/comments/confirmed", fetcher);
  return { comments: data, isLoading, isError: error };
}

export function useSliders(): useSlidersResult {
  const { data, error, isLoading } = useSWR("/pages", fetcher);
  return { sliders: data, isLoading, isError: error };
}
export function useSlider(id: string | null): useSliderResult {
  const { data, error, isLoading } = useSWR(
    !!id ? `/pages/${id}` : null,
    fetcher
  );
  return { slider: data, isLoading, isError: error };
}
