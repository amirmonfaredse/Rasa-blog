import { signIn } from "_data/auth";

export default function Page() {
  return (
    <form className="w-full h-80 flex items-center justify-center">
      <button
        onClick={async () =>
          await signIn("google", { redirectTo: "/dashboard" })
        }
        className="w-96 h-14 bg-folly-900 text-ghost-100 rounded-md shadow-lg hover:scale-105 duration-300"
      >
        ورود به پنل ادمین از طریق گوگل
      </button>
    </form>
  );
}
