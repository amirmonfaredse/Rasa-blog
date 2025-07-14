import { ToastType } from "@/types/app/admin/store";
import {
  ActionResult,
  getTaggedServiceProps,
  getTaggingServiceProps,
  getTagServiceProps,
  TagFieldProps,
} from "@/types/app/data/types";
import { supabase } from "_data/supabase";

export async function serviceCreateTag(
  newTag: TagFieldProps
): Promise<ActionResult> {
  const { error } = await supabase.from("tags").insert([newTag]);
  if (error) throw new Error("در ایجاد برچسب مشکلی پیش آمده است");
  return {
    type: ToastType.Success,
    message: "برچسب جدید با موفقیت ایجاد شد",
  };
}
export async function serviceGetTags(): Promise<getTagServiceProps[]> {
  const { data, error } = await supabase.from("tags").select("*");
  if (error) throw new Error("مشکلی در دریافت  برچسب ها ایجاد شده است");
  return data;
}

export async function serviceGetTag(
  tagId: string
): Promise<getTagServiceProps> {
  const { data, error } = await supabase
    .from("tags")
    .select()
    .eq("id", tagId)
    .single();
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت  برچسب ایجاد شده است");
  }
  return data;
}

export async function serviceUpdateTag(
  updatedField: TagFieldProps,
  id: string
): Promise<ActionResult> {
  const { error } = await supabase
    .from("tags")
    .update(updatedField)
    .eq("id", id);
  if (error) throw new Error("مشکلی در بروزرسانی  برچسب ایجاد شده است");
  return {
    type: ToastType.Success,
    message: "برچسب بروزرسانی شد",
  };
}
export async function serviceDeleteTag(id: string): Promise<ActionResult> {
  const { error } = await supabase.from("tags").delete().eq("id", id);
  if (error) throw new Error("در حذف برچسب مشکلی ایجاد شده است");
  return {
    type: ToastType.Success,
    message: "برچسب با موفقیت حذف شد",
  };
}

export async function serviceTagging(
  newField: getTaggingServiceProps
): Promise<ActionResult> {
  const { error } = await supabase.from("tagging-blogs").insert([newField]);
  if (error) {
    console.log(error);
    throw new Error("مشکلی در فرآیند تگ زدن ایجاد شده است");
  }
  return {
    type: ToastType.Success,
    message: "برچسب گذاری با موفقیت تکمیل شد",
  };
}
export async function serviceDeleteRelationalTagged(
  blogId: string
): Promise<ActionResult> {
  const { error } = await supabase
    .from("tagging-blogs")
    .delete()
    .eq("blogId", Number(blogId));
  if (error) {
    console.log(error);
    throw new Error("مشکلی در حذف مقادیر تگ شده ها ایجاد شده است");
  }
  return {
    type: ToastType.Success,
    message: "برچسب گذاری با موفقیت حذف شد",
  };
}
export async function serviceGetTaggeds(): Promise<getTaggedServiceProps[]> {
  const { data, error } = await supabase.from("tagging-blogs").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت تگ ها ایجاد شده است");
  }
  return data;
}

export async function serviceGetTagBySlug(
  slug: string
): Promise<getTagServiceProps> {
  const { data, error } = await supabase
    .from("tags")
    .select()
    .eq("slug", slug)
    .single();
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت تگ ایجاد شده است");
  }
  return data;
}
