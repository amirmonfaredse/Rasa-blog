import { ActionResult } from "@/types/app/data/types";
import {
  deleteMessage,
  getMessage,
} from "_data/messages/message.services";
import { secureAccess } from "_data/utility";
import { revalidateContacts } from "_lib/utility/messages.utils";
import { NextResponse } from "next/server";

export async function GET({
  params,
}: {
  params: { messageId: string };
}): Promise<Response> {
  const message = await getMessage(params.messageId);
  return NextResponse.json(message);
}
export async function DELETE({
  params,
}: {
  params: { messageId: string };
}): Promise<Response> {
  await secureAccess();
  const messageId = params.messageId;
  const deleteResult = await deleteMessage(messageId);
  revalidateContacts();
  return NextResponse.json<ActionResult[]>([deleteResult]);
}
