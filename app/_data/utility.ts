import persianDate from "persian-date";

import type {
  BlogFieldProps,
  CategorizedProps,
  CategoryFieldProps,
  TaggedProps,
  TaggingFieldProps,
} from "@/types/app/data/types";
import { PostgrestError } from "@supabase/supabase-js";
import { sanitizeTextOnServer } from "../utility/jsDOM";
import { auth } from "./auth";

export async function secureAList(list: []) {
  return list.map((item: any) => sanitizeTextOnServer(item));
}
type Result =
  | PostgrestError
  | CategorizedProps
  | CategoryFieldProps
  | BlogFieldProps
  | TaggedProps
  | TaggingFieldProps;

export function throwIfError(
  result: Result
): asserts result is Exclude<Result, PostgrestError> {
  if ("code" in result) throw result;
}

export async function secureAccess() {
  const session = await auth();
  if (!session)
    throw new Error("برای انجام این اقدام باید وارد اکانت خود شوید");
  const allowedEmails = process.env.ALLOWED_EMAILS?.split(",");
  if (!allowedEmails) throw new Error("تنظیمات سرور ناقص است");
  const isUserValid = allowedEmails.some(
    (email) => session.user.email === email
  );
  if (!isUserValid) throw new Error("شما مجاز به انجام این اقدام نیستید");
}

export function validateUrl(image: string): string {
  try {
    new URL(image);
    return encodeURI(image);
  } catch (error) {
    throw new Error("لینک تصویر مجاز نیست");
  }
}
export function getPersianDate(): string {
  return new persianDate().format("MMMM,D");
}

export function idRand(): string {
  return String(Math.floor(Math.random() * 10000));
}
