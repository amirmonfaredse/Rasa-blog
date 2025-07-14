import { serviceCommentsGetMessage } from "_data/messages/messageServices";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { commentId: string } }) {
  const comment = await serviceCommentsGetMessage(params.commentId);
  return NextResponse.json(comment);
}
