import { signInAction } from "@/app/_data/actions";

export default function Page() {
  return (
    <form action={signInAction}>
      <button>
        ورود به پنل
      </button>
    </form>
  )
}
