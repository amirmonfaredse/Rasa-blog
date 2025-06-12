import { signOutAction } from "@/app/_data/actions";
import { auth } from "@/app/_data/auth";
import Image from "next/image";
import Link from "next/link";
import persianDate from "persian-date";

export default async function Header() {
  const { user } = await auth();
  const date = new persianDate(new Date()).format("dddd  |   D - MMMM - YYYY");
  return (
    <div className="w-full h-[5%] flex items-center justify-end p-2 bg-white shadow-md">
      <div className="w-full flex justify-between items-center ">
        <div className="flex items-center justify-center gap-1 text-sm ">
          <Image
            className="rounded-full mx-2"
            src={user.image}
            alt={user.name}
            width={30}
            height={30}
          />
          <span className="text-folly-800">{user.name.split(" ")[0]}</span>
          <span className="hidden md:flex">خوش آمدید!</span>
        </div>
        <div className="hidden md:flex w-fit text-sm text-ghost-1000 cursor-default">
          {date}
        </div>
        <ul className="flex gap-5 items-center">
          <li className=" text-blue-800 text-sm hover:text-blue-500 transition-colors">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className=" text-blue-800 text-sm hover:text-blue-500 transition-colors">
            <form action={signOutAction}>
              <button>خروج</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}
