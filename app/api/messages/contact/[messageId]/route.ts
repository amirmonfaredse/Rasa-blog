import { ActionResult, MessageProps } from "@/types/app/data/types";
import { deleteMessage, getMessage } from "_data/services/message.services";
import { secureAccess } from "_data/utility";
import { revalidateContacts } from "_lib/utility/messages.utils";
import { NextResponse } from "next/server";

export async function GET({
  params,
}: {
  params: Promise<{ messageId: string }>;
}): Promise<Response> {
  const { messageId } = await params;
  const result = await getMessage(messageId);
  if ("code" in result) throw result;
  return NextResponse.json<MessageProps>(result);
}
export async function DELETE({
  params,
}: {
  params: Promise<{ messageId: string }>;
}): Promise<Response> {
  await secureAccess();
  const { messageId } = await params;
  const result = await deleteMessage(messageId);
  if ("code" in result) throw result;
  revalidateContacts();
  return NextResponse.json<MessageProps>(result);
}
