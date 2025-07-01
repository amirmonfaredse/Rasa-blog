import persianDate from "persian-date";

import { sanitizeTextOnServer } from "../utility/jsDOM";
import { auth } from "./auth";

export async function secureAList(list: []) {
  return list.map((item: any) => sanitizeTextOnServer(item));
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
interface TagListProps {
  id: string;
  title: string;
  slug: string;
}
export async function secureTagList(list: []): Promise<TagListProps[]> {
  return list.map((item: TagListProps) => {
    return {
      id: item.id,
      title: sanitizeTextOnServer(item.title),
      slug: sanitizeTextOnServer(item.slug),
    };
  });
}
export async function validateUrl(image: string): Promise<boolean> {
  try {
    new URL(image);
    return true;
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
