import { ActionResult } from "@/types/app/data/types";
import {
  serviceCommentsConfirmMessage,
  serviceCommentsDeleteMessage,
  serviceCommentsGetMessage,
} from "_data/messages/messageServices";
import { secureAccess } from "_data/utility";
import { revalidateComments } from "_lib/utility/messages.utils";
import { NextResponse } from "next/server";

export async function GET({
  params,
}: {
  params: { commentId: string };
}): Promise<Response> {
  const comment = await serviceCommentsGetMessage(params.commentId);
  return NextResponse.json(comment);
}
export async function DELETE({
  params,
}: {
  params: { commentId: string };
}): Promise<Response> {
  await secureAccess();
  const commentId = params.commentId;
  const { deleteResult, blogId } = await serviceCommentsDeleteMessage(
    commentId
  );
  if (blogId) revalidateComments(blogId);
  return NextResponse.json<ActionResult[]>([deleteResult]);
}

export async function PUT({
  params,
}: {
  params: { commentId: string };
}): Promise<Response> {
  await secureAccess();
  const commentId = params.commentId;
  const { updateResult, blogId } = await serviceCommentsConfirmMessage(
    commentId
  );
  if (blogId) revalidateComments(blogId);
  return NextResponse.json<ActionResult[]>([updateResult]);
}
