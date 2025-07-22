import { CommentProps } from "@/types/app/data/types";
import { getConfirmedComments } from "_data/services/message.services";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const result = await getConfirmedComments();
  if ("code" in result) throw result;
  return NextResponse.json<CommentProps[]>(result);
}
