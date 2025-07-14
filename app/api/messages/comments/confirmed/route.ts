import {
    serviceCommentsGetConfirmedMessages
} from "_data/messages/messageServices";
import { NextResponse } from "next/server";

export async function GET() {
  const comments = await serviceCommentsGetConfirmedMessages();
  return NextResponse.json(comments);
}
