import { ActionResult } from "@/types/app/data/types";
import {
  serviceCommentsGetMessages,
  serviceCommentsSendMessage,
} from "_data/messages/messageServices";
import { idRand } from "_data/utility";
import { extractCommentFields, revalidateComments } from "lib/messagesUtils";
import { NextResponse } from "next/server";
import { sanitizeHTMLOnServer } from "utility/jsDOM";

export async function GET(): Promise<Response> {
  const comments = await serviceCommentsGetMessages();
  return NextResponse.json(comments);
}
export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();
  const messId = idRand();
  const blogId = sanitizeHTMLOnServer(formData.get("blogId"));
  const newFields = extractCommentFields(formData, messId, blogId);
  const result = await serviceCommentsSendMessage(newFields);
  revalidateComments(blogId);
  return NextResponse.json<ActionResult[]>([result]);
}
