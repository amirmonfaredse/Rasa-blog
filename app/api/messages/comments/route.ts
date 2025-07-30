import { CommentProps } from "@/types/app/data/types";
import { getComments, sendComment } from "_data/services/message.services";
import { secureAccess } from "_data/utils/server.utils";
import {
  extractCommentFields,
  revalidateComments,
} from "_lib/utility/messages.utils";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const result = await getComments();
  if ("code" in result) throw result;
  return NextResponse.json<CommentProps[]>(result);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const newFields = extractCommentFields(formData);
  const result = await sendComment(newFields);
  if ("code" in result) throw result;
  const { blogId } = result;
  revalidateComments(blogId);
  return NextResponse.json<CommentProps>(result);
}
