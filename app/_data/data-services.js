import { notFound } from "next/navigation";
import { supabase } from "./supabase";

// @ About
//   - GET
// About Page will create with several section , each table row pointing into a section of it,
export async function getAboutSections() {
  const { data, error } = await supabase.from("about").select("*");
  if (error) throw new Error("مشکلی در دریافت اطلاعات درباره من پیش آمده است");
  return data;
}
export async function getAboutSection(id) {
  const { data, error } = await supabase
    .from("about")
    .select("*")
    .eq("id", id)
    .single();
  if (error) notFound();
  return data;
}
// @ About
//     -PUT
export async function updateAbout(id, updatedFields) {
  const { data, error } = await supabase
    .from("about")
    .update(updatedFields)
    .eq("id", id);
  // .select("*")
  // .single();
  if (error) throw new Error("بروزرسانی  انجام نشد ❌ّ");
  return data;
}
// @ About
//   - POST
export async function createAbout(newAbout) {
  const { data, error } = await supabase.from("about").insert([newAbout]);
  if (error) throw new Error("در ایجاد بخش درباره ما مشکلی پیش آمده");
  return data;
}
// @ About
//   -DELETE
export async function deleteAbout(id) {
  const { error } = await supabase.from("about").delete().eq("id", String(id));
  if (error) throw new Error("این بخش حذف نشد");
}

// @ Portfolio
//    -GET
export async function getPortfolioCards() {
  const { data, error } = await supabase.from("portfolio").select("*");
  if (error)
    throw new Error("مشکلی در دریافت اطلاعات نمونه کارها پیش آمده است");
  return data;
}
export async function getPortfolioCard(id) {
  const { data, error } = await supabase
    .from("portfolio")
    .select("*")
    .eq("id", id)
    .single();
  if (error) notFound();
  return data;
}
// @ Portfolio
//    - POST
export async function createPortfolio(newPortfolio) {
  const { data, error } = await supabase
    .from("portfolio")
    .insert([newPortfolio]);
  if (error) throw new Error("در ایجاد نمونه کار جدید مشکلی پیش آمده ");
  return data;
}
// @ Portfolio
//    - PUT
export async function updatePortfolio(id, updatedFields) {
  const { data, error } = await supabase
    .from("portfolio")
    .update(updatedFields)
    .eq("id", id);

  if (error) throw new Error("در ویرایش نمونه کار مشکلی پیش آمده");
  return data;
}
// @ Portfolio
//    - DELETE
export async function deletePortfolio(id) {
  const { error } = await supabase
    .from("portfolio")
    .delete()
    .eq("id", String(id));
  if (error) throw new Error("امکان حذف این نمونه کار وجود ندارد");
}
// @ Experiences
//     - GET
export async function getExperiencesCards() {
  const { data, error } = await supabase.from("expriences").select("*");
  if (error) throw new Error("مشکلی در دریافت اطلاعات تجربیات پیش آمده است");
  return data;
}
export async function getExperiencesCard(id) {
  const { data, error } = await supabase
    .from("expriences")
    .select("*")
    .eq("id", id)
    .single();
  if (error) notFound();
  return data;
}
// @ Services
//     - GET
export async function getServicesSections() {
  const { data, error } = await supabase.from("services").select("*");
  if (error) throw new Error("مشکلی در دریافت اطلاعات خدمات من پیش آمده است");
  return data;
}
export async function getServicesSection(id) {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();
  if (error) notFound();
  return data;
}
// @ Services
//     - POST
export async function createServicesSection(newService) {
  const { data, error } = await supabase.from("services").insert([newService]);
  if (error) throw new Error("در ایجاد خدمات مشکلی پیش آمده است");
  return data;
}
// @ Services
//     - PUT
export async function updateServicesSection(id, updatedFileds) {
  const { data, error } = await supabase
    .from("services")
    .update(updatedFileds)
    .eq("id", id);

  if (error) throw new Error("مشکلی در ویرایش خدمات مورد نظر پیش آمده است");
  return data;
}
// @ Services
//     - DELETE
export async function deleteService(id) {
  const { error } = await supabase
    .from("services")
    .delete()
    .eq("id", String(id));
  if (error) throw new Error("مشکلی در حذف کردن این خدمات ایجاد شده است");
}
// @ Skills
//
export async function getSkillsCards() {
  const { data, error } = await supabase.from("skills").select("*");
  if (error)
    throw new Error("مشکلی در دریافت اطلاعات مهارت های من پیش آمده است");
  return data;
}
export async function getSkillsCard(id) {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .eq("id", id)
    .single();
  if (error) notFound();
  return data;
}

