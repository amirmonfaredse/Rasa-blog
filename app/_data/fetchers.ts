"use client";
import {
  useBlogResult,
  useBlogsResult,
  useCategoriesResult,
  useCategorizedResult,
  useCategoryResult,
  useCommentResult,
  useCommentsResult,
  useConfirmedCommentsResult,
  useImageFilesResult,
  useImageFileURLResult,
  useMessageResult,
  useMessagesResult,
  useSliderResult,
  useSlidersResult,
  useTaggedsResult,
  useTagResult,
  useTagsResult,
} from "@/types/app/admin/hooks";
import { ActionResult } from "@/types/app/data/types";
import { PostFormData } from "lib/http";
import { ToastType } from "react-hot-toast";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useBlogs(): useBlogsResult {
  const { data, error, isLoading } = useSWR("/api/blogss", fetcher);
  return {
    blogs: data,
    isLoading,
    isError: error,
  };
}
export function useBlog(id: string): useBlogResult {
  const { data, error, isLoading } = useSWR(`/api/blogs/${id}`, fetcher);
  return {
    blog: data,
    isLoading,
    isError: error,
  };
}

export function useTags(): useTagsResult {
  const { data, error, isLoading } = useSWR("/api/blogs/tags", fetcher);
  return { tags: data, isLoading, isError: error };
}
export function useTag(id: string): useTagResult {
  const { data, error, isLoading } = useSWR(`/api/blogs/tags/${id}`, fetcher);
  return { tag: data, isLoading, isError: error };
}

export function useTaggeds(): useTaggedsResult {
  const { data, error, isLoading } = useSWR("/api/blogs/tags/taggeds", fetcher);
  return { taggeds: data, isLoading, isError: error };
}

export function useCategories(): useCategoriesResult {
  const { data, error, isLoading } = useSWR("/api/blogs/categories", fetcher);
  return { categories: data, isLoading, isError: error };
}
export function useCategory(id: string): useCategoryResult {
  const { data, error, isLoading } = useSWR(`/api/categories/${id}`, fetcher);
  return { category: data, isLoading, isError: error };
}
export function useCategorizeds(): useCategorizedResult {
  const { data, error, isLoading } = useSWR(
    "/api/categories/categorizeds",
    fetcher
  );
  return { categorizeds: data, isLoading, isError: error };
}

export function useImageFiles(): useImageFilesResult {
  const { data, error, isLoading } = useSWR("/api/media/images", fetcher);
  return { images: data, isLoading, isError: error };
}

export function useImageFileURL(filePath: string): useImageFileURLResult {
  const { data, error, isLoading } = useSWR(`/api/media/${filePath}`, fetcher);
  return { image: data, isLoading, isError: error };
}

export function useMessages(): useMessagesResult {
  const { data, error, isLoading } = useSWR("/api/messages/contact", fetcher);
  return { messages: data, isLoading, isError: error };
}

export function useMessage(id: string): useMessageResult {
  const { data, error, isLoading } = useSWR(
    `/api/messages/contact/${id}`,
    fetcher
  );
  return { message: data, isLoading, isError: error };
}

export function useComments(): useCommentsResult {
  const { data, error, isLoading } = useSWR("/api/messages/comments", fetcher);
  return { comments: data, isLoading, isError: error };
}
export function useComment(id: string): useCommentResult {
  const { data, error, isLoading } = useSWR(
    `/api/messages/comments/${id}`,
    fetcher
  );
  return { comment: data, isLoading, isError: error };
}
export function useConfirmedComments(): useConfirmedCommentsResult {
  const { data, error, isLoading } = useSWR("/api/comments/confirmed", fetcher);
  return { comments: data, isLoading, isError: error };
}

// NO API YET , FIND AN ANSWER : THE ONLY WAY TO FETCH DATA IS END POINTS?
export function useSliders(): useSlidersResult {
  const { data, error, isLoading } = useSWR("/api/pages/home/sliders", fetcher);
  return { sliders: data, isLoading, isError: error };
}
export function useSlider(id: string): useSliderResult {
  const { data, error, isLoading } = useSWR(
    `/api/pages/home/sliders/${id}`,
    fetcher
  );
  return { slider: data, isLoading, isError: error };
}
export function useCreateBlog() {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blogs",
    (url: string, { arg }: { arg: FormData }) =>
      PostFormData<ActionResult[]>(url, arg)
  );
  return { trigger, data, error, isMutating };
}
