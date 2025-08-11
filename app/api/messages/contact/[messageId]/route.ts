import { MessageProps } from "@/types/app/data/types";
import { deleteMessage, getMessage } from "_data/services/message.services";
import { revalidateContacts } from "_data/utils/messages.utils";
import { secureAccess } from "_data/utils/server.utils";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ messageId: string }>;
  }
): Promise<Response> {
  const { messageId } = await params;
  const result = await getMessage(messageId);
  if ("code" in result) throw result;
  return NextResponse.json<MessageProps>(result);
}
export async function DELETE(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ messageId: string }>;
  }
): Promise<Response> {
  await secureAccess();
  const { messageId } = await params;
  const result = await deleteMessage(messageId);
  if ("code" in result) throw result;
  revalidateContacts();
  return NextResponse.json<MessageProps>(result);
}
