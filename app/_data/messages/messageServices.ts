import { ToastType } from "@/types/app/admin/store";
import {
  ActionResult,
  CommentFieldProps,
  MessageFieldProps,
  serviceCommentGetMessage,
  serviceGetMessageProps,
} from "../../../types/app/data/types";
import { supabase } from "../supabase";
import { revalidatePath } from "next/cache";

// POST
export async function serviceContactSendMessage(
  newMessage: MessageFieldProps
): Promise<ActionResult> {
  try {
    await supabase.from("contact").insert([newMessage]);
    return {
      type: ToastType.Success,
      message: "پیام با موفقیت ارسال شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "در ارسال پیام مشکلی ایجاد شده است",
      error,
    };
  }
}

// GET
export async function serviceContactGetMessages(): Promise<
  serviceGetMessageProps[]
> {
  const { data, error } = await supabase.from("contact").select("*");
  if (error) throw new Error("مشکلی در دریافت پیام ها ایجاد شده است");
  return data;
}
export async function serviceContactGetMessage(
  id: string
): Promise<serviceGetMessageProps> {
  const { data, error } = await supabase
    .from("contact")
    .select()
    .eq("id", id)
    .single();
  if (error) throw new Error("مشکلی در دریافت  پیام ایجاد شده است");
  return data;
}

// DELETE
export async function serviceContactDeleteMessage(
  id: string
): Promise<ActionResult> {
  try {
    await supabase.from("contact").delete().eq("id", id);
    return {
      type: ToastType.Success,
      message: "پیام با موفقیت حذف شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در حذف کردن پیام پیش آمده",
      error,
    };
  }
}

export async function serviceCommentsGetMessages(): Promise<
  serviceCommentGetMessage[]
> {
  const { data, error } = await supabase.from("comments").select("*");
  if (error) throw new Error("مشکلی در دریافت نظرات پیش آمده است");
  return data;
}
export async function serviceCommentsGetMessage(
  id: string
): Promise<serviceCommentGetMessage> {
  const { data, error } = await supabase
    .from("comments")
    .select()
    .eq("id", id)
    .single();
  if (error) throw new Error("مشکلی در دریافت این نظر پیش آمده است");
  return data;
}
export async function serviceCommentsConfirmMessage(
  id: string
): Promise<{ updateResult: ActionResult; blogId?: string }> {
  try {
    const { data } = await supabase
      .from("comments")
      .update({ confirmed: true })
      .eq("id", id)
      .select("blogId");
    const blogId = data?.[0]?.blogId;
    return {
      updateResult: {
        type: ToastType.Success,
        message: "پیام تایید شد",
      },
      blogId,
    };
  } catch (error) {
    return {
      updateResult: {
        type: ToastType.Error,
        message: "در تایید کامنت مشکلی ایجاد شده است",
        error,
      },
    };
  }
}
export async function serviceCommentsGetConfirmedMessages(): Promise<
  serviceCommentGetMessage[]
> {
  const { data, error } = await supabase
    .from("comments")
    .select()
    .eq("confirmed", true);

  if (error) throw new Error("مشکلی در دریافت نظرات ایجاد شده است");
  return data;
}
export async function serviceCommentsSendMessage(
  newComment: CommentFieldProps
): Promise<ActionResult> {
  try {
    await supabase.from("comments").insert([newComment]);
    return {
      type: ToastType.Success,
      message: "نظر ارسال شد",
    };
  } catch (error) {
    return {
      type: ToastType.Error,
      message: "مشکلی در دریافت نظرات پیش آمده است",
      error,
    };
  }
}
export async function serviceCommentsDeleteMessage(
  id: string
): Promise<{ deleteResult: ActionResult; blogId?: string }> {
  try {
    const { data } = await supabase
      .from("comments")
      .delete()
      .eq("id", id)
      .select("blogId");
    const blogId = data?.[0]?.blogId;

    return {
      deleteResult: {
        type: ToastType.Success,
        message: "نظر با موفقیت حذف شد",
      },
      blogId,
    };
  } catch (error) {
    return {
      deleteResult: {
        type: ToastType.Error,
        message: "مشکلی در دریافت نظرات پیش آمده است",
        error,
      },
    };
  }
}
