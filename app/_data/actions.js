"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn, signOut } from "./auth";
import {
  createAbout,
  createPortfolio,
  createServicesSection,
  deleteAbout,
  deletePortfolio,
  deleteService,
  getAboutSection,
  getPortfolioCard,
  getServicesSection,
  updateAbout,
  updatePortfolio,
  updateServicesSection
} from "./data-services";
//  @ Auth Actions
export async function signInAction() {
  await signIn("google", { redirectTo: "/dashboard" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/login" });
}

// @About Actions

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
  await deleteAbout(about.id);
  revalidatePath("/dashboard/about");
}

//  @ Portfolio Actions

export async function createPortfolioAction(formData) {
  const newPortfolioCard = {
    title: formData.get("title"),
    media: formData.get("media"),
    description: formData.get("description"),
    dependencies: JSON.stringify([formData.get("dependencies")]),
    links: JSON.stringify([formData.get("links")]),
  };
  await createPortfolio(newPortfolioCard);
  revalidatePath("dashboard/portfolio");
  redirect("/dashboard/portfolio");
}
export async function updatePortfolioAction(formData) {
  const cardId = Number(formData.get("id"));
  const portfolioCard = await getPortfolioCard(cardId);
  if (!portfolioCard) throw new Error("این نمونه کار وجود ندارد");
  const updatedFields = {
    id: cardId,
    title: formData.get("title"),
    media: formData.get("media"),
    description: formData.get("description"),
    links: JSON.stringify([formData.get("links")]),
    dependencies: JSON.stringify([formData.get("dependencies")]),
  };
  await updatePortfolio(cardId, updatedFields);
  revalidatePath("dashboard/portfolio");
  revalidatePath("dashboard");
}
export async function removePortfolioAction(id) {
  const portfolio = await getPortfolioCard(id);
  if (!portfolio) throw new Error("حذف کردن این نمونه کار امکان پذیر نیست");
  await deletePortfolio(portfolio.id);
  revalidatePath("/dashboard/portfolio");
}

// @ Services Actions
export async function createServiceAction(formData) {
  const newServicesSection = {
    title: formData.get("title"),
    media: formData.get("media"),
    description: formData.get("description"),
    doDescription: JSON.stringify(formData.get("doDescription")),
    dependencies: JSON.stringify(formData.get("dependencies")),
    knowledges: JSON.stringify(formData.get("knowledges")),
  };
  await createServicesSection(newServicesSection);
  revalidatePath("/dashboard/services");
  redirect("/dashboard/services");
}
export async function updateServiceAction(formData) {
  const sectionId = Number(formData.get("id"));
  const serviceSection = await getServicesSection(sectionId);
  if (!serviceSection) throw new Error("امکان ویرایش این خدمات وجود ندارد");
  const updatedFields = {
    id: sectionId,
    title: formData.get("title"),
    media: formData.get("media"),
    description: formData.get("description"),
    dependencies: JSON.stringify([formData.get("dependencies")]),
    knowledges: JSON.stringify([formData.get("knowledges")]),
    doDescription: formData.get("doDescription"),
  };
  await updateServicesSection(serviceSection.id, updatedFields);
  revalidatePath("/dashboard/services");
  revalidatePath("/dashboard");
}
export async function removeServiceAction(id) {
  const service = await getServicesSection(id);
  if (!service) throw new Error("امکان حذف این خدمات وجود ندارد");
  await deleteService(service.id);
  revalidatePath("/dashboard/services");
}


