"use server";

import { sanitizeTextOnServer } from "../utility/jsDOM";
import { auth } from "./auth";

export async function secureAList(list) {
  return list.map((item) => sanitizeTextOnServer(item).trim());
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

export async function secureTagList(list) {
  return list.map((item) => {
    return {
      title: sanitizeTextOnServer(item.title),
      slug: sanitizeTextOnServer(item.slug),
    };
  });
}