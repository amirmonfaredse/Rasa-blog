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
  try {
    await supabase.from("tags").insert([newTag]);
    return {
      type: ToastType.Success,
      message: "برچسب جدید با موفقیت ایجاد شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "در ایجاد برچسب مشکلی پیش آمده است",
      error,
    };
  }
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
  try {
    await supabase.from("tags").update(updatedField).eq("id", id);
    return {
      type: ToastType.Success,
      message: "برچسب بروزرسانی شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در بروزرسانی  برچسب ایجاد شده است",
      error,
    };
  }
}
export async function serviceDeleteTag(id: string): Promise<ActionResult> {
  try {
    await supabase.from("tags").delete().eq("id", id);
    return {
      type: ToastType.Success,
      message: "برچسب با موفقیت حذف شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "در حذف برچسب مشکلی ایجاد شده است",
      error,
    };
  }
}

export async function serviceTagging(
  newField: getTaggingServiceProps
): Promise<ActionResult> {
  try {
    await supabase.from("tagging-blogs").insert([newField]);
    return {
      type: ToastType.Success,
      message: "برچسب گذاری با موفقیت تکمیل شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در فرایند برچسب گذاری ایجاد شده است",
      error,
    };
  }
}
export async function serviceDeleteRelationalTagged(
  blogId: string
): Promise<ActionResult> {
  try {
    await supabase.from("tagging-blogs").delete().eq("blogId", Number(blogId));

    return {
      type: ToastType.Success,
      message: "برچسب گذاری با موفقیت حذف شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در حذف برچسب گذاری ها ایجاد شده است",
      error,
    };
  }
}
export async function serviceGetTaggeds(): Promise<getTaggedServiceProps[]> {
  const { data, error } = await supabase.from("tagging-blogs").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت برچسب ها ایجاد شده است");
  }
  return data;
}
// CHANGE  OR MANAGE IT ON API
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
