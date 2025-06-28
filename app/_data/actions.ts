"use server";
import { signIn, signOut } from "./auth";
//  @ Auth Actions
export async function signInAction() {
  await signIn("google", { redirectTo: "/dashboard" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/login" });
}
