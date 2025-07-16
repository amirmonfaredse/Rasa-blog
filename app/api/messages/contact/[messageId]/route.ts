import { ActionResult } from "@/types/app/data/types";
import {
  serviceContactDeleteMessage,
  serviceContactGetMessage,
} from "_data/messages/messageServices";
import { secureAccess } from "_data/utility";
import { revalidateContacts } from "_lib/utility/messages.utils";
import { NextResponse } from "next/server";

export async function GET({
  params,
}: {
  params: { messageId: string };
}): Promise<Response> {
  const message = await serviceContactGetMessage(params.messageId);
  return NextResponse.json(message);
}
export async function DELETE({
  params,
}: {
  params: { messageId: string };
}): Promise<Response> {
  await secureAccess();
  const messageId = params.messageId;
  const deleteResult = await serviceContactDeleteMessage(messageId);
  revalidateContacts();
  return NextResponse.json<ActionResult[]>([deleteResult]);
}
