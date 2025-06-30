import { signInAction } from "@/app/_data/actions";

export default function Page() {
  return (
    <form
      action={signInAction}
      className="w-full h-80 flex items-center justify-center"
    >
      <button className="w-96 h-14 bg-folly-900 text-ghost-100 rounded-md shadow-lg hover:scale-105 duration-300">
        ورود به پنل ادمین از طریق گوگل
      </button>
    </form>
  );
}
