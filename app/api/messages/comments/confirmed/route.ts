import {
    getConfirmedComments
} from "_data/messages/messageServices";
import { NextResponse } from "next/server";

export async function GET() {
  const comments = await getConfirmedComments();
  return NextResponse.json(comments);
}
