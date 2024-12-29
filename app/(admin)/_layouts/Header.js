import Link from "next/link";

export default function Header() {
  return (
    <div className="h-8 bg-gray-300 px-8 py-1">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <nav className="z-10 ">
          <ul className="flex gap-16 items-center">
            <li className=" text-gray-800 text-sm hover:text-gray-500 transition-colors">
              <Link href="/">صفحه اصلی</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
