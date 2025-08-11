import { MessageFieldProps, MessageProps } from "@/types/app/data/types";
import { getMessages, sendMessage } from "_data/services/message.services";
import { extractMessageFields } from "_data/utils/messages.utils";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const result = await getMessages();
  if ("code" in result) throw result;
  return NextResponse.json<MessageProps[]>(result);
}
export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();
  const newFields = extractMessageFields(formData);
  const result = await sendMessage(newFields);
  if ("code" in result) throw result;
  return NextResponse.json<MessageFieldProps>(result);
}
