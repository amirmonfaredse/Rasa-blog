import { newPersianDate } from "_data/utils/data.utils";
import Image from "next/image";
import Link from "next/link";
import { auth, signOut } from "../../_data/auth";

export default async function Header() {
  const { user } = await auth();
  const date = newPersianDate();
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
            <button
              onClick={async () => await signOut({ redirectTo: "/login" })}
            >
              خروج
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
