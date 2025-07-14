import { serviceCommentsGetMessages } from "_data/messages/messageServices";
import { NextResponse } from "next/server";

export async function GET() {
  const comments = await serviceCommentsGetMessages();
  return NextResponse.json(comments);
}
