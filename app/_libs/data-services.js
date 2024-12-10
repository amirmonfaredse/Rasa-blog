import { notFound } from "next/navigation";
import { supabase } from "./supabase";





// @GET DATA

// @ About
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
// @ Experiences
//
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
// @ Portfolio
//
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
// @ Services
//
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

// @ Skills
//
export async function getSkillsCards() {
  const { data, error } = await supabase.from("skills").select("*");
  if (error) throw new Error("مشکلی در دریافت اطلاعات مهارت های من پیش آمده است");
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
