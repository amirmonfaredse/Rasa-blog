import { ToastType } from "@/types/app/admin/store";
import { PostgrestError } from "@supabase/supabase-js";
import {
  ActionResult,
  CommentFieldProps,
  MessageFieldProps,
  CommentProps,
  MessageProps,
} from "../../../types/app/data/types";
import { supabase } from "../supabase";

export async function sendMessage(
  newMessage: MessageFieldProps
): Promise<PostgrestError | MessageFieldProps> {
  const { error, data } = await supabase
    .from("contact")
    .insert([newMessage])
    .select()
    .single();

  return error ?? data!;
}

export async function getMessages(): Promise<PostgrestError | MessageProps[]> {
  const { data, error } = await supabase.from("contact").select("*");
  return error ?? data!;
}
export async function getMessage(
  id: string
): Promise<PostgrestError | MessageProps> {
  const { data, error } = await supabase
    .from("contact")
    .select()
    .eq("id", id)
    .single();
  return error ?? data!;
}

// DELETE
export async function deleteMessage(
  id: string
): Promise<PostgrestError | MessageProps> {
  const { error, data } = await supabase
    .from("contact")
    .delete()
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}

export async function getComments(): Promise<PostgrestError | CommentProps[]> {
  const { error, data } = await supabase.from("comments").select("*");
  return error ?? data!;
}
export async function getComment(
  id: string
): Promise<PostgrestError | CommentProps> {
  const { error, data } = await supabase
    .from("comments")
    .select()
    .eq("id", id)
    .single();
  return error ?? data!;
}

export async function getConfirmedComments(): Promise<
  PostgrestError | CommentProps[]
> {
  const { error, data } = await supabase
    .from("comments")
    .select()
    .eq("confirmed", true)
    .single();
  return error ?? data!;
}
export async function getConfirmedComment(
  id: string
): Promise<PostgrestError | CommentProps> {
  const { error, data } = await supabase
    .from("comments")
    .update({ confirmed: true })
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}

export async function sendComment(
  newComment: CommentFieldProps
): Promise<PostgrestError | CommentProps> {
  const { error, data } = await supabase
    .from("comments")
    .insert([newComment])
    .select()
    .single();
  return error ?? data!;
}
export async function deleteComment(
  id: string
): Promise<PostgrestError | CommentProps> {
  const { error, data } = await supabase
    .from("comments")
    .delete()
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}
