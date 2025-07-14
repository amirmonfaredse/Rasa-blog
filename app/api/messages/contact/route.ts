import { serviceContactGetMessages } from "_data/messages/messageServices";
import { NextResponse } from "next/server";

export async function GET() {
  const messages = await serviceContactGetMessages();
  return NextResponse.json(messages);
}
