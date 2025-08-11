"use client";

import { signOut } from "_data/auth";

export default function SignInButton() {
  return (
    <button
      onClick={async () => {
        await signOut({ redirectTo: "/login" });
      }}
    >
      خروج
    </button>
  );
}
