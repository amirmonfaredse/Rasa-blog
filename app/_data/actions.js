"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import {
  createAbout,
  deleteAbout,
  getAboutSection,
  updateAbout,
} from "./data-services";
import { redirect } from "next/navigation";
export async function signInAction() {
  await signIn("google", { redirectTo: "/dashboard" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/login" });
}
export async function updateAboutAction(formData) {
  const sectionId = Number(formData.get("id"));
  const aboutSection = await getAboutSection(sectionId);
  if (!aboutSection) throw new Error("این بخش درباره ما وجود ندارد");
  const updatedFields = {
    id: sectionId,
    title: formData.get("title"),
    media: formData.get("media"),
    content: formData.get("content"),
  };
  await updateAbout(sectionId, updatedFields);
  revalidatePath("/dashboard");
  revalidatePath("/dashboard/about");
}
export async function createAboutAction(formData) {
  const newAboutSection = {
    title: formData.get("title"),
    media: formData.get("media"),
    content: formData.get("content"),
  };
  await createAbout(newAboutSection);
  revalidatePath("/dashboard/about");
  redirect("/dashboard/about");
}
export async function removeAboutAction(id) {
  const about = await getAboutSection(id);
  if (!about) throw new Error("حذف کردن این بخش امکان پذیر نیست");
  await deleteAbout(id);
  revalidatePath("/dashboard/about");
}
