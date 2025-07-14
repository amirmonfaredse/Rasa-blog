import {
  serviceContactGetMessage
} from "_data/messages/messageServices";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { messageId: string } }) {
  const message = await serviceContactGetMessage(params.messageId);
  return NextResponse.json(message);
}
