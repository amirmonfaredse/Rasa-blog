import { ActionResult } from "@/types/app/data/types";
import {
  serviceContactGetMessages,
  serviceContactSendMessage,
} from "_data/messages/messageServices";
import { idRand, secureAccess } from "_data/utility";
import { extractMessageFields } from "_lib/utility/messages.utils";
import { NextResponse } from "next/server";

export async function GET() {
  const messages = await serviceContactGetMessages();
  return NextResponse.json(messages);
}
export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();
  const messId = idRand();
  const newFields = extractMessageFields(formData, messId);
  const messageResult = await serviceContactSendMessage(newFields);
  return NextResponse.json<ActionResult[]>([messageResult]);
}
